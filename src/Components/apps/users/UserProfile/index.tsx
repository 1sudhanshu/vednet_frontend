import { Container, Row } from "reactstrap";
import UserProfileFirst from "../../../BounsUi/Tour/TourMain/Header/UserProfileFirst";
import FirstSocial from "../../../BounsUi/Tour/TourMain/Social/FirstSocial";
import SecondSocial from "../../../BounsUi/Tour/TourMain/Social/SecondSocial";
import ThirdSocial from "../../../BounsUi/Tour/TourMain/Social/ThirdSocial";
import FourthSocial from "../../../BounsUi/Tour/TourMain/Social/FourthSocial";

const UserProfileContainer = () => {
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

export default UserProfileContainer;
