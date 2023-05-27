import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import { Btn, H5 } from "../../../../../AbstractElements";
import { BasicInputGroups, Cancel, Submit } from "../../../../../Constant";
import BacicGroup2CardBody from "./BasicGroup2CardBody";

const BasicGroup2 = () => {
  return (
    <Card>
      <CardHeader>
        <H5>{BasicInputGroups}</H5>
      </CardHeader>
      <CardBody>
        <BacicGroup2CardBody />
      </CardBody>
      <CardFooter>
        <Btn color="primary" type="submit" className="me-2">
          {Submit}
        </Btn>
        <Btn color="light" type="reset">
          {Cancel}
        </Btn>
      </CardFooter>
    </Card>
  );
};

export default BasicGroup2;
