import  {  useCallback, useState } from 'react';
import { Row, Col, Card, CardBody, TabContent } from 'reactstrap';
import { Orgenization } from '../../../Constant';
import NavOrg from './OrganiceTab/NavOrg';
import TabOrg from './OrganiceTab/TabOrg';
import HeadingCommon from '../../../Common/HeadingCommon';

const OrgenizationTab = () => {
  const [orgactiveTab, setOrgActiveTab] = useState('1');
  const callback = useCallback((tab:string) => {
    setOrgActiveTab(tab);
  }, []);

  return (
      <Card className="mb-0">
        <HeadingCommon Heading={Orgenization} span  dangerouslySetInnerHTML={'10 Contacts'} spanClassName="f-14 pull-right mt-0" className="d-flex" /> 
        <CardBody className="p-0">
          <Row className="list-persons">
            <NavOrg callback={callback} />
            <Col xl="8" md="7" className='xl-50'>
              <TabContent activeTab={orgactiveTab}>
                <TabOrg />
              </TabContent>
            </Col>
          </Row>
        </CardBody>
      </Card>
  );
};

export default OrgenizationTab;