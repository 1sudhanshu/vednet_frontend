import { CardBody } from "reactstrap";
import { DisabledOutlineButtonsData } from "../../../Data/Buttons";
import { Btn } from "../../../AbstractElements";

const DisabledButtonsBody = () => {
  return (
    <CardBody>
      <div className="btn-showcase">
        {DisabledOutlineButtonsData.map((btnItem, i) => (
          <Btn
            disabled={btnItem.disabled && true}
            size={btnItem.size}
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

export default DisabledButtonsBody;
