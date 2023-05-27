import { Btn } from "../../../../../../AbstractElements";
import { useState } from "react";
import { Card, CardBody,  Col, Collapse } from "reactstrap";
import { FilterHeading, FindJobs } from "../../../../../../Constant";
import SearchAndMap from './SearchAndMap';
import FilterCheckBox from "./FilterCheckBox";
import HeaderWithIcon from "../../../../../../Common/HeaderWithIcon";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl="12">
      <Card>
        <HeaderWithIcon Heading={FilterHeading} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Collapse isOpen={isOpen}>
          <CardBody className="filter-cards-view animate-chk">
            <SearchAndMap />
            <FilterCheckBox />
            <Btn className="text-center" color="primary" type="button">
              {FindJobs}
            </Btn>
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default Filter;
