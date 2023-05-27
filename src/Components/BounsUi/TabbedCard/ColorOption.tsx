import  { Fragment, useState } from 'react';
import { Col, Card,  CardBody, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { TabCardData } from '../../../Data/Components/BonusUI/TabbedCard/TabCardCommon'
import {  P } from '../../../AbstractElements';
import HeadingCommon from '../../../Common/HeadingCommon';

const ColorOptionClass = () => {

    const [activeTab, setActiveTab] = useState('1');

    return (
        <Fragment>
            {TabCardData.map((item, i) =>
                <Col lg="12 box-col-12" xl="6 xl-100" key={i}>
                    <Card>
                    <HeadingCommon Heading="Color Option" /> 
                        <CardBody>
                            <div className="tabbed-card">
                                <Nav className={item.tabClass}>
                                    <NavItem>
                                        <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                             Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                                             Profile
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                                            Contact
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <P  className= 'mb-0'  >{item.pare1}</P>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <P className= 'mb-0' >{item.pare2}</P>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <P  className= 'mb-0' >{item.pare3}</P>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            )}
        </Fragment>
    );
};

export default ColorOptionClass;