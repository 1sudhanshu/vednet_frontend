import { Fragment } from "react";
import { AdvancedData } from "../../../../Data/Components/BonusUI/SweetAlert";
import { Btn } from "../../../../AbstractElements";
interface propsType {
  Displayalert?: any;
}

const DynamicSweetAlert = (props: propsType) => {
  const { Displayalert } = props;
  return (
    <Fragment>
      {AdvancedData.map((item) => (
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

export default DynamicSweetAlert;
