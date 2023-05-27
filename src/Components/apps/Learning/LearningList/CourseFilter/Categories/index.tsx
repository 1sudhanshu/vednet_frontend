import { Card,  Col, Collapse } from "reactstrap";
import { Categories } from "../../../../../../Constant";
import { useState } from "react";
import DesignCategories from "./DesignCategories";
import DevelopmentCategories from "./DevelopmentCategories";
import HeaderWithIcon from "../../../../../../Common/HeaderWithIcon";

const CategoriesCheckBoxes = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Col xl="12">
      <Card>
        <HeaderWithIcon Heading={Categories} isOpen={isOpen} setIsOpen={setIsOpen}/> 
        <Collapse isOpen={isOpen}>
          <DesignCategories />
          <DevelopmentCategories />
        </Collapse>
      </Card>
    </Col>
  );
};

export default CategoriesCheckBoxes;
