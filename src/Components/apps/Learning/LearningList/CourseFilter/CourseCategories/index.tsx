import { Card, Col, Collapse, CardBody } from "reactstrap";
import { Btn } from "../../../../../../AbstractElements";
import { useState } from "react";
import { Filter, FindCourse } from "../../../../../../Constant";
import SearchInput from "./SearchInput";
import CategoriesCheckBox from "./CategoriesCheckBox";
import DurationCheckBox from "./DurationCheckBox";
import PriceCheckBox from "./PriceCheckBox";
import StatusCheckBox from "./StatusCheckBox";
import HeaderWithIcon from "../../../../../../Common/HeaderWithIcon";

const CourseCategories = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl="12">
      <Card>
        <HeaderWithIcon Heading={FindCourse} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Collapse isOpen={isOpen}>
          <CardBody className="filter-cards-view animate-chk">
            <SearchInput />
            <CategoriesCheckBox />
            <DurationCheckBox />
            <PriceCheckBox />
            <StatusCheckBox />
            <Btn color="primary" className="text-center">
              {Filter}
            </Btn>
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default CourseCategories;
