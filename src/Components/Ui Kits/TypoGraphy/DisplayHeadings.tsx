import { Card, CardBody, Col } from "reactstrap";
import { H1 } from "../../../AbstractElements";
import HeadingCommon from "../../../Common/HeadingCommon";

const DisplayHeadings = () => {
  const span = `Traditional heading elements are designed to work best in the meat
  of your page content. When you need a heading to stand out, consider
  using a <strong>display heading</strong>—a larger, slightly more
  opinionated heading style.`;
  let numbers = [2, 3, 4];
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading="Display headings" dangerouslySetInnerHTML={span}/>
        <CardBody className=" typography">
          <H1 className="display-1">Display 1</H1>
          {numbers.map((data) => (<H1 key={data} className={`display-${data}`}>Display {data}</H1>))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default DisplayHeadings;
