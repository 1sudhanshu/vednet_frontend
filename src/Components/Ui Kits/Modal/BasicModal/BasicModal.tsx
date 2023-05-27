import { Card, CardBody } from "reactstrap";
import BasicBtn from "./BasicBtn";
import GridModal from "./GridModal";
import VerticalBtn from "./VerticalBtn";
import HeadingCommon from "../../../../Common/HeadingCommon";
import ScrollBtn from "./ScrollBtn";

const BasicModal = () => {
  return (
    <Card>
      <HeadingCommon Heading="Basic Modal" />
      <CardBody className="btn-showcase">
        <BasicBtn />
        <ScrollBtn />
        <VerticalBtn />
        <GridModal />
      </CardBody>
    </Card>
  );
};

export default BasicModal;
