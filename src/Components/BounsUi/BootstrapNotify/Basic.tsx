import React, { Fragment } from "react";
import { Col, Card, CardBody, CardHeader } from "reactstrap";
import { toast } from "react-toastify";
import { Btn, H5 } from "../../../AbstractElements";

const Basic = () => {
  const basictoaster = (toastname: string) => {
    switch (toastname) {
      case "basicsuccessToast":
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        break;
      case "basicinfoToast":
        toast.info("Info Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        break;
      case "basicwarningToast":
        toast.warn("Warning Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        break;
      case "basicdangerToast":
        toast.error("Danger Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        break;
      default:
        break;
    }
  };
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader>
            <H5>Basic Examples</H5>
          </CardHeader>
          <CardBody>
            <div className="btn-showcase">
              <Btn
                name="basicsuccessToast"
                color="success"
                onClick={(e: any) => basictoaster(e.target.name)}
              >
                Success Notification
              </Btn>
              <Btn
                name="basicinfoToast"
                color="info"
                onClick={(e: any) => basictoaster(e.target.name)}
              >
                Info Notification
              </Btn>
              <Btn
                name="basicwarningToast"
                color="warning"
                onClick={(e: any) => basictoaster(e.target.name)}
              >
                Warning Notification
              </Btn>
              <Btn
                name="basicdangerToast"
                color="danger"
                onClick={(e: any) => basictoaster(e.target.name)}
              >
                Danger Notification
              </Btn>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Basic;
