import { CardHeader } from "reactstrap";
import { H5, Image } from "../../../../AbstractElements";
import { JoinedGroupsHead } from "../../../../Constant";

const JoinedGroupsHeader = () => {
  const images = require.context("../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <CardHeader>
      <H5>{JoinedGroupsHead}</H5>
      <div className="joined-status d-flex">
        <div className="circle-dashed-box">
          <div className="circle-dashed">
            <i className="fa fa-plus" />
          </div>
        </div>
        <Image
          className="img-30 rounded-circle"
          src={dynamicImage("2.jpg")}
          alt=""
        />
        <Image
          className="img-30 rounded-circle me-0"
          src={dynamicImage("12.jpg")}
          alt=""
        />
      </div>
    </CardHeader>
  );
};

export default JoinedGroupsHeader;