import { Fragment } from 'react';
import { Col, Card, CardBody, CardHeader } from 'reactstrap';
import { toast } from 'react-toastify';
import { Btn, H5 } from '../../../../AbstractElements';
import AutoCustomDirections from './AutoCustomDirections';

const CustomDirectionsClass = () => {

  const directiontoaster = (toastname:string) => {
    switch (toastname) {
      case 'directionssuccessToast':
        toast.success('Success Notification !', {
          position: toast.POSITION.TOP_CENTER
        });
        break;
      case 'directionsinfoToast':
        toast.info('Info Notification !', {
          position: toast.POSITION.BOTTOM_CENTER
        });
        break;
      case 'directionswarningToast':
        toast.warn('Warning Notification !', {
          position: toast.POSITION.BOTTOM_LEFT
        });
        break;
      case 'directionsdangerToast':
        toast.error('Danger Notification !', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        break;
      default:
        break;
    }
  };

  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader >
            <H5>Custom Directions</H5>
          </CardHeader>
          <CardBody>
            <div className="btn-showcase">
              <Btn name= 'directionssuccessToast' color= 'success' onClick= {(e:any) => directiontoaster(e.target.name)} >Top Center</Btn>
              <AutoCustomDirections />
            </div>
          </CardBody >
        </Card >
      </Col >
    </Fragment >
  );
};

export default CustomDirectionsClass;