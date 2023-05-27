import {  Btn } from "../../../../../../AbstractElements";
import { useState } from "react";
import { Card,  Col, Collapse } from "reactstrap";
import { AllJobTitle, JobTitle } from "../../../../../../Constant";
import JobTitleCheckBox from "./JobTitleCheckBox";
import HeaderWithIcon from "../../../../../../Common/HeaderWithIcon";

const JobTitleClass = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl="12">
      <Card>
        <HeaderWithIcon Heading={JobTitle} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Collapse isOpen={isOpen}>
          <JobTitleCheckBox />
          <Btn className="btn-block text-center" color="primary" type="button">
            {AllJobTitle}
          </Btn>
        </Collapse>
      </Card>
    </Col>
  );
};

export default JobTitleClass;
