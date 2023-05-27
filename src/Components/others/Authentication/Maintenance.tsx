import { Container } from "reactstrap";
import { H2, H4, LI, UL } from "../../../AbstractElements";
import { BackToHomePage, MAINTENANCE, ThankYouForPatience, UnderMaintenance } from "../../../Constant";
import { Link } from "react-router-dom";

const Maintenance = () => {
  return (
    <div className="page-wrapper compact-wrapper">
      <div className="error-wrapper maintenance-bg">
        <Container>
          <UL className="maintenance-icons simple-list">
            <LI><i className="fa fa-cog" /></LI>
            <LI><i className="fa fa-cog" /></LI>
            <LI><i className="fa fa-cog" /></LI>
          </UL>
          <div className="maintenance-heading">
            <H2 className="headline">{MAINTENANCE}</H2>
          </div>
          <H4 className="sub-content">{UnderMaintenance}<br />{ThankYouForPatience}</H4>
          <div>
            <Link to={`${process.env.PUBLIC_URL}/dashboard/enterprise`} className="btn btn-primary-gradien btn-lg text-light">
              {BackToHomePage}
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Maintenance;
