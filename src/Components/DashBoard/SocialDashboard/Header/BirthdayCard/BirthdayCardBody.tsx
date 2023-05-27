import { CardBody } from "reactstrap";
import { H4, Image, P } from "../../../../../AbstractElements";
import { HileriJecnosBirthday, birthdayWish } from "../../../../../Constant";

const BirthdayCardBody = () => {
  const images = require.context("../../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };

  return (
    <CardBody>
      <div className="d-flex">
        <i className="icofont icofont-birthday-cake" />
        <a className="pull-right" href="#javascript">
          <i className="icofont icofont-arrow-right" />
        </a>
      </div>
      <Image
        className="img-50 align-top m-r-15 rounded-circle"
        src={dynamicImage("1.jpg")}
        alt=""
      />
      <small className="d-block">Today is</small>
      <H4>{HileriJecnosBirthday}</H4>
      <P>{birthdayWish}</P>
    </CardBody>
  );
};

export default BirthdayCardBody;
