import  {  useRef } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import ReactToPrint from 'react-to-print';
import { Cancel, PrintViews, Print } from '../../../Constant';
import { Btn } from '../../../AbstractElements';
import Printpreview from './printpreview';
import { userCallbackUser } from './ContactType';
import { H5 } from "../../../AbstractElements";
interface propsTypes {
  printmodal:boolean, selectedUser:userCallbackUser, toggleCallback:(result:boolean)=>void;
}
const PrintModal = ({ printmodal, selectedUser, toggleCallback }:propsTypes) => {
  const printModalToggle = () => {toggleCallback(false);};

  const componentRef = useRef();
  return (
      <Modal isOpen={printmodal} toggle={printModalToggle} >
        <div className='modal-header'>
          <H5 className='modal-title'>{PrintViews}</H5>
          <Btn color= 'transprant' className= 'btn-close' onClick= {printModalToggle} type= 'button' ></Btn>
        </div>
        <ModalBody className="list-persons">
          <Printpreview selectedUser={selectedUser} />
          <ReactToPrint
            trigger={() => (
              <Btn color= 'secondary' className="me-1"  >
                {Print}
              </Btn>
            )}
            content={() => componentRef?.current || null }
          />&nbsp;&nbsp;
          <Btn color='primary' onClick= {printModalToggle } >{Cancel}</Btn>
        </ModalBody>
      </Modal>
  );
};

export default PrintModal;