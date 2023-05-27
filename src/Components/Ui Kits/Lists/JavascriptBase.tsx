import { useState } from 'react';
import { Card, CardBody,  Col, Row, TabContent, TabPane } from 'reactstrap';
import {  LI, UL } from '../../../AbstractElements';
import HeadingCommon from '../../../Common/HeadingCommon';

const JavascriptBase = () => {

  const [activeTab, setActiveTab] = useState('1');

  return (
    <Col sm="12" xl="12">
      <Card>
      <HeadingCommon Heading="JavaScriptBehavior" />
        <CardBody>
          <Row>
            <Col sm="4 tab-javascript">
              <UL  className= 'simple-list nav-primary nav-pills' >
                <LI  href= '#javascript'  className= {activeTab === '1' ? 'list-group-item-action active' : ''} onClick= {() => setActiveTab('1') }>Home</LI>
              </UL>
              <UL className='simple-list'>
                <LI  href= '#javascript'  className= {activeTab === '2' ? 'list-group-item-action active' : ''} onClick= {() => setActiveTab('2') } >Profile</LI>
              </UL>
              <UL className='simple-list'>
                <LI  href= '#javascript'  className= {activeTab === '3' ? 'list-group-item-action active' : ''} onClick= {() => setActiveTab('3') } >Messages</LI>
              </UL>
              <UL className='simple-list'>
                <LI  href= '#javascript'  className= {activeTab === '4' ? 'list-group-item-action active' : ''} onClick= {() => setActiveTab('4') } >Settings</LI>
              </UL>

            </Col>
            <Col sm="8">
              <TabContent activeTab={activeTab} id="nav-tabContent">
                <TabPane tabId="1" className="fade show">{'1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}</TabPane>
                <TabPane tabId="2" className="fade show">{'2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}</TabPane>
                <TabPane tabId="3" className="fade show">{'3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}</TabPane>
                <TabPane tabId="4" className="fade show">{'4. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}</TabPane>
              </TabContent>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JavascriptBase;
