import { CardBody } from "reactstrap";
import { ActiveButtonsData } from "../../../Data/Buttons";
import { Btn } from "../../../AbstractElements";

const ActiveButtonCardBody = () => {
  return (
    <CardBody>
      <div className="btn-showcase">
        {ActiveButtonsData.map((btnItem, i) => (
          <Btn
            color={btnItem.colorClass}
            active={btnItem.active && true}
            key={i}
          >
            {btnItem.title}
          </Btn>
        ))}
      </div>
    </CardBody>
  );
};

export default ActiveButtonCardBody;
