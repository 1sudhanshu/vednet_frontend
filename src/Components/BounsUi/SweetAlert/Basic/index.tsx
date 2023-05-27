import { useState } from "react";
import SweetAlert from "sweetalert2";
import { Col, Card, CardBody } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamicAlert from "./DynamicAlert";

const BasicComponent = () => {
  const [alert, setalert] = useState(false);

  const Displayalert = (name: string) => {
    setalert(true);
    if (name === "basic") {
      SweetAlert.fire({ title: "Hello world!" });
    }
    if (name === "basictitlealert") {
      SweetAlert.fire({
        title: "Heres the title!",
        text: "...and heres the text!",
      });
    }
    if (name === "basicsuccessalert") {
      SweetAlert.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "info",
      });
    }
    if (name === "basicinfoalert") {
      SweetAlert.fire({
        title: "Click on either the button or outside the modal.",
      }).then((result) => {
        if (result.value) {
          SweetAlert.fire(`The returned value is: ${result.value}`);
        } else {
          SweetAlert.fire("The returned value is: null");
        }
      });
    }
    if (name === "basicwarningalert") {
      SweetAlert.fire({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ok",
        cancelButtonText: "cancel",
        reverseButtons: true,
      }).then((result) => {
        if (result.value) {
          SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
        } else {
          SweetAlert.fire("Your imaginary file is safe!");
        }
      });
    }
  };

  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading="Basic Examples" />
        <CardBody>
          <div className="btn-showcase">
            <Btn
              color="primary"
              className="sweet-1"
              name="basic"
              onClick={(e) => Displayalert(e.target.name)}
              key={1}
            >
              Basic
            </Btn>
            <DynamicAlert Displayalert={Displayalert} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicComponent;
