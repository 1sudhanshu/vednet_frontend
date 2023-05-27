import { useState } from "react";
import { Card, CardBody } from "reactstrap";
import { Btn } from "../../../AbstractElements";
import CommonModal from "../../../Common/modal";
import HeadingCommon from "../../../Common/HeadingCommon";

const SizesModal = () => {
  const [Large, setLarge] = useState(false);
  const [Small, setSmall] = useState(false);

  const LargeModaltoggle = () => setLarge(!Large);
  const SmallModaltoggle = () => setSmall(!Small);
  return (
    <Card>
      <HeadingCommon Heading="Sizes modal" />
      <CardBody className="btn-showcase">
        <Btn color="primary" onClick={LargeModaltoggle}>LargeModal</Btn>
        <CommonModal isOpen={Large} title="LargeModal" toggler={LargeModaltoggle} size="lg">...</CommonModal>
        <Btn color="primary" onClick={SmallModaltoggle}>SmallModal</Btn>
        <CommonModal isOpen={Small} title="SmallModal" toggler={SmallModaltoggle} size="sm">...</CommonModal>
      </CardBody>
    </Card>
  );
};

export default SizesModal;
