import { DollarSign } from "react-feather";
import { Card, CardBody} from "reactstrap";
import { PillIcon } from "../../../Data/Components/TagPills";
import HeadingCommon from "../../../Common/HeadingCommon";

export interface PillIcontypes {
  class: string;
  Tittle: JSX.Element;
}

const PillsWithIcon = () => {
  return (
    <Card>
      <HeadingCommon Heading="Pills With Icon" />
      <CardBody className="digits">
        <a href="#javascript" className="badge rounded-pill badge-primary"><DollarSign /></a>
        {PillIcon.map((data: PillIcontypes, index) => (<a key={index} href="#javascript" className={data.class}>{data.Tittle}</a>))}
      </CardBody>
    </Card>
  );
};

export default PillsWithIcon;
