import { useState } from "react";
import SweetAlert from "sweetalert2";
import { Col, Card, CardBody } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { Btn } from "../../../../AbstractElements";
import DynamicSweetAlert from "./DynamicSweetAlert";
const Advanced = () => {
  const [alert, setalert] = useState(false);
  const Displayalert = (name: string) => {
    setalert(true);
    if (name === "advanceDanger") {
      SweetAlert.fire({
        title: "Are you sure you want to do this?",
        cancelButtonText: "Oh noez!",
        confirmButtonText: "Aww yiss!",
        reverseButtons: true,
        showCancelButton: true,
      });
    }
    if (name === "advanceInfo") {
      SweetAlert.fire({
        title: "Write something here:",
        input: "text",
      }).then((result) => {
        if (result.value) {
          SweetAlert.fire(`You typed: ${result.value}`);
        } else {
          SweetAlert.fire("You typed: null");
        }
      });
    }
    if (name === "advanceWarning") {
      SweetAlert.fire({
        title: "Are you sure you want to do this?",
        cancelButtonText: "Oh noez!",
        confirmButtonText: "Aww yiss!",
        reverseButtons: true,
        showCancelButton: true,
      });
    }
  };
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading="Advanced State" />
        <CardBody>
          <div className="btn-showcase">
            <Btn
              color="danger"
              className="sweet-11"
              name="advanceDanger"
              onClick={(e) => Displayalert(e.target.name)}
              key={1}
            >
              Danger
            </Btn>
            <DynamicSweetAlert Displayalert={Displayalert} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Advanced;
