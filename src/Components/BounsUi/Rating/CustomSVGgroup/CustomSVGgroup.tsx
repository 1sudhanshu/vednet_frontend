import { Fragment } from "react";
import { Col, Card, CardHeader } from "reactstrap";
import CustomSVGgroupBody from "./CustomSVGgroupBody";
import { H5 } from "../../../../AbstractElements";
const CustomSVGgroup = () => {
  return (
    <Fragment>
      <Col xl="6" lg="12">
        <Card>
          <CardHeader>
            <H5>Custom SVG group</H5>
          </CardHeader>
          <CustomSVGgroupBody />
        </Card>
      </Col>
    </Fragment>
  );
};

export default CustomSVGgroup;
