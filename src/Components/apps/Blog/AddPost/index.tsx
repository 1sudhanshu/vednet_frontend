import { Container, Row, Card, CardBody } from "reactstrap";
import { Col } from "react-bootstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { Discard, Post, PostEdit } from "../../../../Constant";
import { Btn } from "../../../../AbstractElements";
import FormPost from "./FormPost";
import DropzoneClass from "./DropzoneClass";

const AddPostContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col sm="12">
          <Card>
            <HeadingCommon Heading={PostEdit} />
            <CardBody className="add-post">
              <FormPost />
              <DropzoneClass />
              <div className="btn-showcase">
                <Btn color="primary" type="submit">
                  {Post}
                </Btn>
                <Btn color="light" type="reset">
                  {Discard}
                </Btn>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddPostContainer;