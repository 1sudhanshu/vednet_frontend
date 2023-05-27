import { Btn, H5, H6, P } from '../../../../AbstractElements';
import { COD, Fast, Free, Submit, Cancel, VerticalStyle, Local, Standard, DeliveryOption } from '../../../../Constant';
import VerticalStyles2 from './VerticalStyles2';
import { Row, Col, Card, CardHeader, CardBody, CardFooter,  Form, Label, Input } from 'reactstrap';

const VerticalStyles = () => {
  return (
      <Col sm="12" xl="6">
        <Card className="height-equal">
          <CardHeader>
            <H5>{VerticalStyle}</H5><span>{'For Create inline megaoption add'} <code>{'.mega-vertical'}</code> {'class in form tag'}</span>
          </CardHeader>
          <CardBody>
            <Form className="mega-vertical">
              <Row>
                <Col sm="12">
                  <P  className=  'mega-title mb-2' >{DeliveryOption}</P>
                </Col>
                <Col sm="6">
                  <Card>
                    <div className="p-20 d-flex">
                      <div className="radio radio-primary me-3">
                        <Input id="radio23" type="radio" name="radio1" value="option1" />
                        <Label for="radio23"></Label>
                      </div>
                      <div className='flex-grow-1'>
                        <H6  className= 'mt-0 mega-title-badge' >{COD}<span className="badge badge-primary pull-right digits">{'50 INR'}</span></H6>
                        <P>{'Estimated 1 Day Shipping ( Duties end tax may be due delivery )'}</P>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card>
                    <div  className="p-20 d-flex">
                      <div className="radio radio-secondary me-3">
                        <Input id="radio24" type="radio" name="radio1" value="option1" />
                        <Label for="radio24"></Label>
                      </div>
                      <div className='flex-grow-1'>
                        <H6  className= 'mt-0 mega-title-badge' >{Fast}<span className="badge badge-primary pull-right digits">{'50 INR'}</span></H6>
                        <P>{'Estimated 1 Day Shipping ( Duties end tax may be due delivery )'}</P>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card>
                    <div className="p-20 d-flex">
                      <div className="radio radio-success me-3">
                        <Input id="radio25" type="radio" name="radio1" value="option1" />
                        <Label for="radio25"></Label>
                      </div>
                      <div className='flex-grow-1'>
                        <H6  className= 'mt-0 mega-title-badge' >{Standard}<span className="badge badge-secondary pull-right digits">{'80 INR'}</span></H6>
                        <P>{'Estimated 3 Day Shipping ( Duties end taxes may be due upon delivery )'}</P>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card>
                    <div className="p-20 d-flex">
                      <div className="radio radio-info me-3">
                        <Input id="radio5" type="radio" name="radio1" value="option1" />
                        <Label for="radio5"></Label>
                      </div>
                      <div className='flex-grow-1'>
                        <H6  className= 'mt-0 mega-title-badge'>{Local} <span className="badge badge-info pull-right digits">{Free}</span></H6>
                        <P>{'Estimated 15 Day Shipping ( Duties end taxes may be due upon delivery )'}</P>
                      </div>
                    </div>
                  </Card>
                </Col>
                <VerticalStyles2 />
              </Row>
            </Form>
          </CardBody>
          <CardFooter className="text-end">
            <Btn  color= 'primary' className= 'm-r-15' type= 'submit' >{Submit}</Btn>
            <Btn  color= 'light' type= 'submit' >{Cancel}</Btn>
          </CardFooter>
        </Card>
      </Col>
  );
};
export default VerticalStyles;