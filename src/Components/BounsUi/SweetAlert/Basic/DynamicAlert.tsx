import { Fragment } from "react";
import { Btn } from "../../../../AbstractElements";
import { BasicSweetalrtData } from "../../../../Data/Components/BonusUI/SweetAlert";
interface propsType {
  Displayalert?: any;
}
const DynamicAlert = (props: propsType) => {
  const { Displayalert } = props;

  return (
    <Fragment>
      {BasicSweetalrtData.map((item) => (
        <Btn
          color={item.color}
          className={item.class}
          name={item.name}
          onClick={(e) => Displayalert(e.target.name)}
          key={item.id}
        >
          {item.title}
        </Btn>
      ))}
    </Fragment>
  );
};

export default DynamicAlert;
