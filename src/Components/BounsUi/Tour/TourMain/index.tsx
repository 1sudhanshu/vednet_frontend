import { useTour } from "@reactour/tour";
import { useEffect } from "react";
import { Container, Row } from "reactstrap";
import UserProfileFirst from "./Header/UserProfileFirst";
import FirstSocial from "./Social/FirstSocial";
import SecondSocial from "./Social/SecondSocial";
import ThirdSocial from "./Social/ThirdSocial";
import FourthSocial from "./Social/FourthSocial";

const TourMain = () => {
  const { setIsOpen } = useTour();
  useEffect(() => {
    var timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <Container fluid={true}>
      <div className="user-profile">
        <Row>
          <UserProfileFirst />
          <FirstSocial />
          <SecondSocial />
          <ThirdSocial />
          <FourthSocial />
        </Row>
      </div>
    </Container>
  );
};

export default TourMain;
