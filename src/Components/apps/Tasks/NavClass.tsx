import  {  useCallback, useState } from 'react';
import { Col, Card, CardBody, Nav, NavItem } from 'reactstrap';
import { PlusCircle } from 'react-feather';
import { Views, Tags, Href } from '../../../Constant';
import NewTaskClass from './NewTask';
import HeaderProfile from './HeaderProfile';
import CreateTag from './CreateTag';
import { tagData, taskData } from '../../../Data/apps/Tasks';

interface propsTypes{activeToggle:(num:string)=>void}

const NavClass = ({ activeToggle }:propsTypes) => {
  const [activeTab, setActiveTab] = useState('1');
  const [tagModal, setTagModal] = useState(false);
  const tagToggle = () => setTagModal(!tagModal);
  const tagCallback = useCallback((modal:boolean) => {setTagModal(modal);}, []);
  return (
      <Col xl="3" className="box-col-3">
          <div className="email-left-aside">
            <Card>
              <CardBody>
                <div className="email-app-sidebar left-bookmark">
                  <HeaderProfile />
                  <Nav className="main-menu" role="tablist">
                    <NavItem>
                      <NewTaskClass />
                    </NavItem>
                    <NavItem>
                      <span className="main-title">{Views}</span>
                    </NavItem>
                    {taskData.map((item) =>
                      <NavItem key={item.id}>
                        <a href={Href} className={activeTab === item.activeTab ? 'active' : ''} onClick={() => {
                          setActiveTab(item.activeTab); activeToggle(item.activeTab);
                        }}>
                          <span className="title"> {item.title}</span>
                        </a>
                      </NavItem>
                    )}
                    <NavItem>
                      <hr />
                    </NavItem>
                    <NavItem><span className="main-title"> {Tags}<span className="pull-right" onClick={tagToggle}><PlusCircle /></span></span></NavItem>
                    <CreateTag tagCallback={tagCallback} tagModal={tagModal} />
                    {tagData.map((item) =>
                        <NavItem key={item.id}><a href={Href} className={activeTab === item.activeTab ? 'show' : ''} onClick={() => {
                          setActiveTab(item.activeTab); activeToggle(item.activeTab);
                        }} ><span className="title"> {item.title}</span></a></NavItem>
                    )}
                  </Nav>
                </div>
              </CardBody>
            </Card>
          </div>
      </Col>
  );
};

export default NavClass;