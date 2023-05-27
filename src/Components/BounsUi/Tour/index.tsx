import TourMain from "./TourMain";
import { TourProvider } from "@reactour/tour";
import { steps } from "../../../Data/Components/BonusUI/Tour";

const TourContainer = () => {
  return (
    <TourProvider
      steps={steps}
      disableInteraction={true}
      disableKeyboardNavigation={false}
    >
      <TourMain />
    </TourProvider>
  );
};

export default TourContainer;
