import { Card,  CardBody } from "reactstrap";
import VaryingModalButton from "./VaryingModalButton";
import HeadingCommon from "../../../../Common/HeadingCommon";

const VaryingModalContent = () => {
  return (
    <Card>
      <HeadingCommon Heading="Varying modal content" />
      <CardBody className="btn-showcase">
        <VaryingModalButton btnText="Open modal for @mdo" defaultVal="@fat" />
        <VaryingModalButton btnText="Open modal for @fat" defaultVal="@Mat" />
        <VaryingModalButton btnText="Open modal for @getbootstrap" defaultVal="@getbootstrap"/>
      </CardBody>
    </Card>
  );
};

export default VaryingModalContent;
