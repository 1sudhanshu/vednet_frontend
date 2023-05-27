import { toast } from "react-toastify";
import { Btn } from "../../../../AbstractElements";
import { autoCloseDynamicDatas } from "../../../../Data/Components/BonusUI/Boostrap notify/AutoCloseDynamic";
import { Fragment } from "react";

const AutoCloseDynamic = () => {
  const autoclosetoaster = (toastname: string) => {
    switch (toastname) {
      case "autoclose1Toast":
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 15000,
        });
        break;
      case "autoclose2Toast":
        toast.info("Info Notification !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
        break;
      case "autoclose3Toast":
        toast.warn("Warning Notification !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
        break;
      case "autoclose4Toast":
        toast.error("Danger Notification !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 500,
        });
        break;
      default:
        break;
    }
  };
  return (
    <Fragment>
      {autoCloseDynamicDatas.map((data, index) => (
        <Btn
          key={index}
          name={data.tittle}
          color={data.color}
          onClick={(e: any) => autoclosetoaster(e.target.name)}
        >
          {data.heading}
        </Btn>
      ))}
    </Fragment>
  );
};

export default AutoCloseDynamic;
