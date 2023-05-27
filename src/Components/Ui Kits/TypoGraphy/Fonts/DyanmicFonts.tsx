import  { Fragment } from "react";
import { FontsData } from "../../../../Data/Components/UiKits/Typography/Headers";
import { Card, CardBody, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { H1, H2, H3, H4, H5, H6 } from "../../../../AbstractElements";

const DyanmicFonts = () => {
  return (
    <Fragment>
      {FontsData.map((Data, index) => (
        <Col key={index} sm="12" xl="4">
          <Card>
            <HeadingCommon Heading={Data?.tittle} />
            <CardBody className="typography">
              <H1 className={Data.className}>Heading 1</H1>
              <H2 className={Data.className}>Heading 2</H2>
              <H3 className={Data.className}>Heading 3</H3>
              <H4 className={Data.className}>Heading 4</H4>
              <H5 className={Data.className}>Heading 5</H5>
              <H6 className={Data.className}>Heading 6</H6>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default DyanmicFonts;
