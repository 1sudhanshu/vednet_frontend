import { AlertCircle } from "react-feather";
import {  Card, CardBody } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DyanmicBadgesAsPartButtons from "./DyanmicBadgesAsPartButtons";
import { Btn } from "../../../../AbstractElements";


const BadgesAsPartButtons = () => {
  return (
    <Card className="height-equal">
      <HeadingCommon Heading="Badges as part buttons" />
      <CardBody>
        <DyanmicBadgesAsPartButtons />
        <div>
          <Btn color="danger">Alert <span className="badge rounded-pill text-dark badge-light">
              <AlertCircle />
            </span>
          </Btn>
        </div>
      </CardBody>
    </Card>
  );
};

export default BadgesAsPartButtons;
