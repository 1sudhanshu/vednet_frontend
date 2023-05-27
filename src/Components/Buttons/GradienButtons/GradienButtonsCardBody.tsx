import { CardBody } from "reactstrap";
import { GradienButtonsData } from "../../../Data/Buttons";
import { Btn } from "../../../AbstractElements";

const GradienButtonsCardBody = () => {
  return (
    <CardBody>
      <div className="btn-showcase">
        {GradienButtonsData.map((btnItem, i) => (
          <Btn color={btnItem.colorClass} key={i}>
            {btnItem.title}
          </Btn>
        ))}
      </div>
    </CardBody>
  );
};

export default GradienButtonsCardBody;
