import { Email, Password, Website,  ContactNumber, CompanyName } from '../../../../Constant';
import {   CardBody,  Form } from 'reactstrap';
import RadioGroup from './RadioGroup';
import HorizontalFormCheckBox from './HorizontalFormCheckBox';
import HorizonatalFormRowCommon from "./common/HorizonatalFormRowCommon"

const HorizontalLayoutCardBody = () => {
  return (
      <CardBody>
        <Form className="theme-form">
          <HorizonatalFormRowCommon type='email' placeHolder='Email' tittle={Email} />
          <HorizonatalFormRowCommon type='password' placeHolder='password' tittle={Password} />
          <HorizonatalFormRowCommon type='number' placeHolder='Contact' tittle={ContactNumber} />
          <HorizonatalFormRowCommon type='text' placeHolder='Company Name' tittle={CompanyName} />
          <HorizonatalFormRowCommon type='url' placeHolder='Website' tittle={Website} />
          <RadioGroup />
          <HorizontalFormCheckBox/>
        </Form>
      </CardBody>
  );
};
export default HorizontalLayoutCardBody;