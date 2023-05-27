import { CardBody } from "reactstrap";
import { OutlineLargeButtonsData } from "../../../Data/Buttons";
import { Btn } from "../../../AbstractElements";

const OutlineLargeButtonsCardBody = () => {
  return (
    <CardBody>
      <div className="btn-showcase">
        {OutlineLargeButtonsData.map((btnItem, i) => (
          <Btn
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

export default OutlineLargeButtonsCardBody;
