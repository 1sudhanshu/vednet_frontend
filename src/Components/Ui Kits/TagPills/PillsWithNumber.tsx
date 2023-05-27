import { Card, CardBody } from "reactstrap";
import { PillsNumber } from "../../../Data/Components/TagPills";
import HeadingCommon from "../../../Common/HeadingCommon";
export interface PillsNumbertypes {
  class: string;
  Tittle: string;
}

const PillsWithNumber = () => {
  return (
    <Card>
      <HeadingCommon Heading="Pills With Number" />
      <CardBody>
        <span className="badge  rounded-pill badge-primary">1</span>
        {PillsNumber.map((data: PillsNumbertypes, index) => (<span key={index} className={data.class}>{data.Tittle}</span>))}
      </CardBody>
    </Card>
  );
};

export default PillsWithNumber;
