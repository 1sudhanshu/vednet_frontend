import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import { Btn, H5 } from "../../../../../AbstractElements";
import { BasicInputGroups, Cancel, Submit } from "../../../../../Constant";
import BacicGroupCardBody from "./BasicGroupCardBody";

const BasicGroup = () => {
  return (
    <Card>
      <CardHeader>
        <H5>{BasicInputGroups}</H5>
      </CardHeader>
      <CardBody>
        <BacicGroupCardBody />
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

export default BasicGroup;
