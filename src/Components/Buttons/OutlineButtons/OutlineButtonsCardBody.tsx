import { CardBody } from "reactstrap";
import { OutlineButtonsData } from "../../../Data/Buttons";
import { Btn } from "../../../AbstractElements";

const OutlineButtonsCardBody = () => {
  return (
    <CardBody>
      <div className="btn-showcase">
        {OutlineButtonsData.map((btnItem, i) => (
          <Btn
            outline={btnItem?.outline && true}
            color={btnItem.colorClass}
            key={i}
          >
            {btnItem.title}
          </Btn>
        ))}
      </div>
    </CardBody>
  );
};

export default OutlineButtonsCardBody;
