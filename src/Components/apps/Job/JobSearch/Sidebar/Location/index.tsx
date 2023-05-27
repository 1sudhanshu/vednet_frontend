import { Btn } from '../../../../../../AbstractElements';
import  {  useState } from 'react';
import { Col, Card,  CardBody,  Collapse } from 'reactstrap';
import { AllLocations,  LocationHeading,  } from '../../../../../../Constant';
import LocationCheckBox from './LocationCheckBox';
import HeaderWithIcon from '../../../../../../Common/HeaderWithIcon';
const Location = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
      <Col xl='12'>
        <Card>
          <HeaderWithIcon Heading={LocationHeading} isOpen={isOpen} setIsOpen={setIsOpen}/>
          <Collapse isOpen={isOpen}>
            <CardBody className='animate-chk'>
                 <LocationCheckBox/> 
            </CardBody>
            <Btn className='btn btn-block text-center' color='primary' type='button'>
              {AllLocations}
            </Btn>
          </Collapse>
        </Card>
      </Col>
  );
};

export default Location;
