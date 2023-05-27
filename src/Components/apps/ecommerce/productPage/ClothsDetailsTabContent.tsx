import { TabContent, TabPane } from "reactstrap";
import { P } from "../../../../AbstractElements";
import {Discription1,Discription2,Discription3,Discription4,} from "../../../../Constant";
interface propsType {
  activeTab: number;
}
const ClothsDetailsTabContent = ({ activeTab }: propsType) => {
  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId={1}>
        <P className="mb-0 m-t-20">{Discription1}</P>
        <P className="mb-0 m-t-20">{Discription2}</P>
      </TabPane>
      <TabPane tabId={2}>
        <P className="mb-0 m-t-20">{Discription3}</P>
      </TabPane>
      <TabPane tabId={3}>
        <P className="mb-0 m-t-20"> {Discription4}</P>
      </TabPane>
      <TabPane tabId={4}>
        <P className="mb-0 m-t-20">
          Product Dimensions : 18 x 18 x 4 cm <br />
          Date First Available : 31 March 2022 <br />
          Manufacturer : Tee Stores <br />
          Item part number : TS-WT721-XS-WHITE <br />
        </P>
      </TabPane>
    </TabContent>
  );
};

export default ClothsDetailsTabContent;
