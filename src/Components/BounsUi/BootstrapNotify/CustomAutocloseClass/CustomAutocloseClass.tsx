import { Fragment } from "react";
import { Col, Card, CardBody, CardHeader } from "reactstrap";
import { toast } from "react-toastify";
import { Btn, H5 } from "../../../../AbstractElements";
import AutoCloseDynamic from "./AutoCloseDynamic";

const CustomAutocloseClass = () => {
  const autoclosetoaster = (toastname: string) => {
    switch (toastname) {
      case "autoclose1Toast":
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 15000,
        });
        break;
      case "autoclose2Toast":
        toast.info("Info Notification !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
        break;
      case "autoclose3Toast":
        toast.warn("Warning Notification !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
        break;
      case "autoclose4Toast":
        toast.error("Danger Notification !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 500,
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
            <H5>Custom Auto close</H5>
          </CardHeader>
          <CardBody>
            <div className="btn-showcase">
              <Btn
                name="autoclose1Toast"
                color="success"
                onClick={(e: any) => autoclosetoaster(e.target.name)}
              >
                AutoCloseIn15000Sec
              </Btn>
              <AutoCloseDynamic />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default CustomAutocloseClass;
