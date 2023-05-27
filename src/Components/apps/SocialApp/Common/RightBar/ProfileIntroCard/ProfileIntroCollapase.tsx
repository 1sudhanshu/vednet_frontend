import { CardBody, Collapse } from "reactstrap";
import { profileIntroData } from "../../../../../../Data/apps/SocialApp";
import { Fragment } from "react";
import { Btn, P } from "../../../../../../AbstractElements";
import {Dribbble,Facebook,SocialNetworks,Twitter,} from "../../../../../../Constant";
import { Link } from "react-router-dom";

interface propsTypes {
  isFilter: boolean;
}

const ProfileIntroCollapse = ({ isFilter }: propsTypes) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="filter-cards-view">
        {profileIntroData.map((data, index) => (
          <Fragment key={index}>
            <span className="f-w-600">{data.tittle} :</span>
            <P>{data.paragraph}</P>
          </Fragment>
        ))}
        <div className="social-network theme-form">
          <span className="f-w-600">{SocialNetworks}</span>
          <Link to="https://www.facebook.com/"><Btn color="transparent" className="social-btn btn-fb mb-2 text-center"><i className="fa fa-facebook m-r-5" />{Facebook}
          </Btn></Link>
          <Link to="https://www.twitter.com/"><Btn color="transparent" className="social-btn btn-twitter mb-2 text-center"><i className="fa fa-twitter m-r-5" />{Twitter}</Btn></Link>
          <Link to="https://dribbble.com/session/new"><Btn color="transparent" className="social-btn btn-google text-center"><i className="fa fa-dribbble m-r-5" />{Dribbble}</Btn></Link>
        </div>
      </CardBody>
    </Collapse>
  );
};

export default ProfileIntroCollapse;
