import { TabContent, TabPane } from "reactstrap";
import {FollowUp,Favourites,Ideas,Business,Holidays,Important,
} from "../../../Constant";
import HistoryClass from "./History";
import OrgenizationTab from "./OrgenizationTab";
import NoDataFoundClass from "./common/NoDataFound";
import PersonalTab from "./PersonalTab";
import { ContactusersType } from "./ContactType";
import React from 'react';

interface propsType {
  activeTab: string;
  users: [] | ContactusersType[] ;
}
const TabComponent:React.FunctionComponent<propsType> = ({ activeTab, users }: propsType):React.ReactElement => {
  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId="1">
        <PersonalTab users={users} />
      </TabPane>
      <TabPane tabId="2">
        <OrgenizationTab />
      </TabPane>
      <TabPane tabId="3">
        <NoDataFoundClass title={FollowUp} />
      </TabPane>
      <TabPane tabId="4">
        <NoDataFoundClass title={Favourites} />
      </TabPane>
      <TabPane tabId="5">
        <NoDataFoundClass title={Ideas} />
      </TabPane>
      <TabPane tabId="6">
        <NoDataFoundClass title={Important} />
      </TabPane>
      <TabPane tabId="7">
        <NoDataFoundClass title={Business} />
      </TabPane>
      <TabPane tabId="8">
        <NoDataFoundClass title={Holidays} />
      </TabPane>
      <HistoryClass />
    </TabContent>
  );
};

export default TabComponent;
