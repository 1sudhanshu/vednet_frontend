import { Btn } from "../../../../AbstractElements";
import { toast } from "react-toastify";
import { autoCustomDirectionsDatas } from "../../../../Data/Components/BonusUI/Boostrap notify/AutoCustomDirections";

const AutoCustomDirections = () => {
  const directiontoaster = (toastname: string) => {
    switch (toastname) {
      case "directionssuccessToast":
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_CENTER,
        });
        break;
      case "directionsinfoToast":
        toast.info("Info Notification !", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        break;
      case "directionswarningToast":
        toast.warn("Warning Notification !", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        break;
      case "directionsdangerToast":
        toast.error("Danger Notification !", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        break;
      default:
        break;
    }
  };

  return (
    <>
      {autoCustomDirectionsDatas.map((data, index) => (
        <Btn
          key={index}
          name={data.btnName}
          color={data.color}
          onClick={(e: any) => directiontoaster(e.target.name)}
        >
          {data.heading}
        </Btn>
      ))}
    </>
  );
};

export default AutoCustomDirections;
