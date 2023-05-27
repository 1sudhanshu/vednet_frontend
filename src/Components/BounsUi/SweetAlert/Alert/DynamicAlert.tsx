import { AlertSweetalertData } from "../../../../Data/Components/BonusUI/SweetAlert";
import { Btn } from "../../../../AbstractElements";
interface propsType {
  Displayalert?: any;
}
const DynamicAlert = (props: propsType) => {
  const { Displayalert } = props;

  return (
    <>
      {AlertSweetalertData.map((item) => (
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
    </>
  );
};

export default DynamicAlert;
