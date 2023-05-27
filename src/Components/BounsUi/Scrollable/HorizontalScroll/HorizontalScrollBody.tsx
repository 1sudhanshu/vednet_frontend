import ScrollBar from "react-perfect-scrollbar";
import { CardBody, Row, Col } from "reactstrap";
import { P } from "../../../../AbstractElements";
import { paragraphContent } from "../../../../Data/Components/BonusUI/Scrollabe";

const HorizontalScrollBody = () => {
  return (
    <CardBody>
      <ScrollBar style={{ height: "300px" }} className="horizontal-scroll" option={{ suppressScrollY: true }}>
        <div className="horz-scroll-content">
          <Row>
            <Col sm="3">
              <P>
                Lorem Ipsum is simply dummy text of the printing andtypesettingindustry. Lorem Ipsum has been the industry'sstandard dummytext ever since the 1500s, when an unknown printertook a galleyof type and scrambled it to make a type specimenbook. It hassurvived not only five centuries, but also the leapintoelectronic typesetting, remaining essentiallyunchanged.LoremIpsum is simply dummy text of the printing andtypesettingindustry. Lorem Ipsum has been the industry'sstandard dummytext ever since the 1500s, when an unknown printertook a galleyof type and scrambled it to make a type specimenbook. It hassurvived not only five centuries, but also the leapintoelectronic typesetting, remaining essentially unchanged.
              </P>
            </Col>
            {paragraphContent.map((data, index) => (
              <Col sm="3" key={index}>
                <P>{data}</P>
              </Col>
            ))}
          </Row>
        </div>
      </ScrollBar>
    </CardBody>
  );
};
export default HorizontalScrollBody;