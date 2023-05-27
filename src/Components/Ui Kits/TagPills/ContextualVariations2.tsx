import { Card, CardBody } from "reactstrap";
import { Contextualvariationsarr2 } from "../../../Data/Components/TagPills";
import HeadingCommon from "../../../Common/HeadingCommon";

export interface Contextualvariationsarr2types {
  class: string;
  Tittle: string;
}

const ContextualVariations2 = () => {
  return (
    <Card>
      <HeadingCommon Heading="Contextual variations" />
      <CardBody>
        <span className="badge  rounded-pill badge-primary">primary</span>
        {Contextualvariationsarr2.map(
          (data: Contextualvariationsarr2types, index) => (<span key={index} className={data.class}>{data.Tittle}</span>)
        )}
      </CardBody>
    </Card>
  );
};

export default ContextualVariations2;
