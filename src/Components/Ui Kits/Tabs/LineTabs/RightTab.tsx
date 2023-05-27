import { useState } from 'react';
import { Card, CardBody,  Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import {  P } from '../../../../AbstractElements';
import HeadingCommon from '../../../../Common/HeadingCommon';

const RightTab = () => {
  const span =`Add <code>.border-tab nav-right</code>class with nav class`
  const [RightLineTab, setRightLineTab] = useState('1');
  return (
    <Col sm="12" xl="6 xl-100">
      <Card>
      <HeadingCommon Heading="Material Style Right Tab" dangerouslySetInnerHTML={span} />
        <CardBody>
          <Row>
            <Col sm="9">
              <TabContent activeTab={RightLineTab} className="text-end">
                <TabPane className="fade show" tabId="1">
                  <P>{'Lorem Ipsum is simply dummy  text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'}</P>
                </TabPane>
                <TabPane tabId="2">
                  <P>{'Lorem Ipsum is simply dummy  text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'}</P>
                </TabPane>
                <TabPane tabId="3">
                  <P>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'}</P>
                </TabPane>
                <TabPane tabId="4">
                  <P>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'}</P>
                </TabPane>
              </TabContent>
            </Col>
            <Col sm="3" className="tabs-responsive-side">
              <Nav className="flex-column border-tab nav-right" >
                <NavItem>
                  <NavLink href="#javascript" className={RightLineTab === '1' ? 'active' : ''} onClick={() => setRightLineTab('1')}>Home</NavLink>
                </NavItem>
                <NavItem >
                  <NavLink href="#javascript" className={RightLineTab === '2' ? 'active' : ''} onClick={() => setRightLineTab('2')}>Profile</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#javascript" className={RightLineTab === '3' ? 'active' : ''} onClick={() => setRightLineTab('3')}>Inbox</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#javascript" className={RightLineTab === '4' ? 'active' : ''} onClick={() => setRightLineTab('4')}>Settings</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RightTab;