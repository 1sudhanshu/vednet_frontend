import { CardBody } from "reactstrap";
import { OutlineExtraSmallButtonsData } from "../../../Data/Buttons";
import { Btn } from "../../../AbstractElements";

const SmallButtonsCardBody = () => {
  return (
    <CardBody>
      <div className="btn-showcase">
        {OutlineExtraSmallButtonsData.map((btnItem, i) => (
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

export default SmallButtonsCardBody;
