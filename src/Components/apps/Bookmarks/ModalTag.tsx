import { Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { Cancel, Save } from '../../../Constant';
interface propTypes{tagToggle:()=>void,value:boolean}

const ModalTag = ({tagToggle,value}:propTypes) => {

  return (
      <Modal className="fade show modal-bookmark" size="lg"
        isOpen={value} toggle={tagToggle}>
        <ModalHeader className="modal-title" toggle={tagToggle}>
          {'Create Tag'}
        </ModalHeader>
        <ModalBody>
          <Form className="form-bookmark needs-validation">
            <div className="form-row">
              <FormGroup className="col-md-12">
                <Label>{'Tag Name'}</Label>
                <Input type="text" />
              </FormGroup>
              <FormGroup className="col-md-12 mb-0">
                <Label>{'Tag color'}</Label>
                <Input type="color" className="fill-color form-control" defaultValue="#655af3" />
              </FormGroup>
            </div>
            <Btn color= 'secondary' onClick= {tagToggle}>{Save}</Btn>&nbsp;&nbsp;
            <Btn color= 'primary' onClick= {tagToggle}>{Cancel}</Btn>
          </Form>
        </ModalBody>
      </Modal>
  );
};
export default ModalTag;