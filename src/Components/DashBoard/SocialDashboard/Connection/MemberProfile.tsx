import { Card, CardBody } from "reactstrap";
import { ComerenDiaz, ComerenDiazParagraph } from "../../../../Constant";
import { H6, P } from "../../../../AbstractElements";
import ViewMembers from "./ViewMembers";

const MemberProfile = () => {
  return (
    <Card className=" card-with-border view-members">
      <CardBody>
        <div className="d-flex">
          <ViewMembers />
        </div>
        <H6>{ComerenDiaz}</H6>
        <P>{ComerenDiazParagraph}</P>
      </CardBody>
    </Card>
  );
};

export default MemberProfile;
