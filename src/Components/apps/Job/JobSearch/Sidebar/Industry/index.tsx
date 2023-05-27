import  {  useState } from 'react';
import { Btn } from '../../../../../../AbstractElements';
import { Card,  Col, Collapse,} from 'reactstrap';
import {  AllIndustries,    IndustryHeading } from '../../../../../../Constant';
import IndustryCheckBox from './IndustryCheckBox';
import HeaderWithIcon from '../../../../../../Common/HeaderWithIcon';

const Industry = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
      <Col xl='12'>
        <Card>
          <HeaderWithIcon Heading={IndustryHeading} isOpen={isOpen} setIsOpen={setIsOpen}/>
          <Collapse isOpen={isOpen}>
            <IndustryCheckBox/>
            <Btn className='btn-block  text-center' color='primary' type='button'>
              {AllIndustries}
            </Btn>
          </Collapse>
        </Card>
      </Col>
  );
};

export default Industry;
