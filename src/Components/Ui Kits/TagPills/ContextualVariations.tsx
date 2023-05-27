import { Card, CardBody } from "reactstrap";
import { Contextualvariationsarr } from "../../../Data/Components/TagPills";
import HeadingCommon from "../../../Common/HeadingCommon";

const ContextualVariations = () => {
  return (
    <Card>
      <HeadingCommon Heading="Contextual variations" />
      <CardBody>
        <span className="badge badge-primary">primary</span>
        {Contextualvariationsarr.map((data, index) => (
          <span key={index} className={data.class}>{data.Tittle}</span>
        ))}
      </CardBody>
    </Card>
  );
};

export default ContextualVariations;
