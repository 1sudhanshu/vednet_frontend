import { Col, Card, CardBody } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import SweetAlert from "sweetalert2";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamicAlert from "./DynamicAlert";

const Alert = () => {
  const Displayalert = (name: string) => {
    if (name === "alertSuccess") {
      SweetAlert.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
    }
    if (name === "alertDanger") {
      SweetAlert.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "error",
      });
    }
    if (name === "alertInfo") {
      SweetAlert.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "info",
      });
    }
    if (name === "alertWarning") {
      SweetAlert.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "warning",
      });
    }
  };
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading="Alert State" />
        <CardBody>
          <div className="btn-showcase">
            <Btn
              color="success"
              className="sweet-8"
              name="alertSuccess"
              onClick={(e) => Displayalert(e.target.name)}
              key={1}
            >
              Success
            </Btn>
            <DynamicAlert Displayalert={Displayalert} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Alert;
