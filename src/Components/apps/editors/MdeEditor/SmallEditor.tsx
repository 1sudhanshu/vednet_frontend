import { H3, P } from "../../../../AbstractElements";
import SimpleMDE from "react-simplemde-editor";
import React, { useState} from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import HeadingCommon from '../../../../Common/HeadingCommon';
import {Instructions,MNDeditortext,SecondExample} from "../../../../Constant";

const SmallEditor = () => {
  const [value, setValue] = useState("");
  const handelChange = (e:string) => {setValue(e);};
  return (
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeadingCommon Heading={SecondExample} />
              <CardBody>
                <Row>
                  <Col md="6">
                    <SimpleMDE
                      id="editor_container"
                      options={{autofocus: true,spellChecker: false,}}
                      onChange={handelChange}
                    />
                  </Col>
                  <Col md="6" className="reader">
                    <H3>{Instructions}</H3>
                    <P>{MNDeditortext}</P>
                    <br />
                    {value}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
  );
};
export default SmallEditor;
