import  { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card,  CardHeader, Col } from "reactstrap";
import {  H4, H6, Image } from "../../../AbstractElements";
import { dynamicImage } from "../../../Service";
import SocialMediaIcons from "../../../Common/SocialMediaIcons";
import AllCardsCardFooter from "./AllCardsCardFooter";
 export  interface cardsType      {
  id: number,
  card_bg:string,
  avatar:string,
  name:string,
  post:string,
  follower:string,
  following:string,
  totalPost:string
}

const AllCards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/api/usercard.json`)
      .then((res) => setCards(res.data));
  }, []);

  return (
    <Fragment>
      {cards.map((item: cardsType) => (
        <Col md="6" xl="4" lg="6" className="box-col-6" key={item.id}>
          <Card className="custom-card">
            <CardHeader className="p-0">
              <Image src={dynamicImage(item.card_bg)} className="img-fluid" alt="user"/>
            </CardHeader>
            <div className="card-profile">
              <Image src={dynamicImage(item.avatar)} className="rounded-circle mx-auto" alt="user"/>
            </div>
            <SocialMediaIcons listClassName="card-social" />
            <Link to={`${process.env.PUBLIC_URL}/user/userprofile`}>
              <div className="text-center profile-details">
                <H4>{item.name}</H4>
                <H6>{item.post}</H6>
              </div>
            </Link>
            <AllCardsCardFooter item={item}/>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};
export default AllCards;
