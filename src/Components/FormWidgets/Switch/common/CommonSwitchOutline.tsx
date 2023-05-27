import { Switchcolor } from "../../../../Data/Forms/FormWidget/index";
import { CardBody, Col, Input, Label } from "reactstrap";

interface prop {
  Checked?: boolean;
}

const CommonSwitchOutline = ({ Checked }: prop) => {
  return (
    <CardBody className="row switch-showcase height-equal">
      <Col sm="12">
        {Switchcolor.map((item) => (
          <div className="d-flex" key={item.id}>
            <Label className="col-form-label m-r-10">{item.title}</Label>
            <div className={item.mediaclass}>
              <Label className="switch">
                <Input type="checkbox" defaultChecked={Checked ? true : false} />
                <span className={item.spanclass}></span>
              </Label>
            </div>
          </div>
        ))}
      </Col>
    </CardBody>
  );
};
export default CommonSwitchOutline;
