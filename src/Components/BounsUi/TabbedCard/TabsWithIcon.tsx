import  { Fragment, useState } from 'react';
import { Col, Card,  CardBody, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import {  P } from '../../../AbstractElements';
import { TabCardData } from '../../../Data/Components/BonusUI/TabbedCard/TabCardCommon';
import HeadingCommon from '../../../Common/HeadingCommon';

const TabCardCommonClass = () => {

    const [activeTab, setActiveTab] = useState('1');

    return (
        <Fragment>
            {TabCardData.map((item, i) =>
                <Col lg="12 box-col-12" xl="6 xl-100" key={i}>
                    <Card>
                    <HeadingCommon Heading="Tabs With Icon" />
                        <CardBody>
                            <div className="tabbed-card">
                                <Nav className={item.navClass}>
                                    <NavItem>
                                        <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}><i className='icofont icofont-ui-home'></i>Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}><i className='icofont icofont-man-in-glasses'></i>Profile
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}><i className='icofont icofont-contacts'></i>Contact
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <P  className= 'mb-0' >{item.pare1}</P>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <P  className= 'mb-0'>{item.pare2}</P>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <P  className= 'mb-0'>{item.pare3}</P>
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

export default TabCardCommonClass;