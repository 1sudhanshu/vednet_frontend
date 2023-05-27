import  { useState } from 'react';  
import { Btn } from '../../../../../../AbstractElements';
import { Card,  Col,  Collapse } from 'reactstrap';
import { AllSkills, SpecificSkills } from '../../../../../../Constant';
import SkillCheckBox from './SkillCheckBox';
import HeaderWithIcon from '../../../../../../Common/HeaderWithIcon';

const SkillClass = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
      <Col xl='12'>
        <Card>
          <HeaderWithIcon Heading={SpecificSkills} isOpen={isOpen} setIsOpen={setIsOpen}/>
          <Collapse isOpen={isOpen}>
            <SkillCheckBox/>            
            <Btn className='btn-block text-center' color='primary' type='button'>{AllSkills}</Btn>
          </Collapse>
        </Card>
      </Col>
  );
};

export default SkillClass;
