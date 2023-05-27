import { useForm } from 'react-hook-form';
import { Form, FormGroup, Label, Modal, ModalBody } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { Cancel, Save } from '../../../Constant';
import { H5 } from "../../../AbstractElements";
interface propsTypes{
  tagCallback:(val:boolean)=>void, tagModal:boolean
}
const CreateTag = ({ tagCallback, tagModal }:propsTypes) => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const tagToggle = () => {
    tagCallback(false);
  };
  const AddTag = () => {};
  return (
      <Modal className="fade show modal-bookmark" isOpen={tagModal} toggle={tagToggle} size="lg">
        <div className='modal-header'>
          <H5 className='modal-title'>{'Create Tag'}</H5>
          <Btn color= 'transprant' className= 'btn-close' onClick= {tagToggle} ></Btn>
        </div>
        <ModalBody>
          <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(AddTag)}>
            <div className="form-row">
              <FormGroup className="col-md-12">
                <Label>{'Tag Name'}</Label>
                <input className="form-control"  type="text" {...register('name', { required: true })} />
                <span style={{ color: 'red' }}>{errors.name && 'First name is required'}</span>
              </FormGroup>
              <FormGroup className="col-md-12 mb-0">
                <Label>{'Tag color'}</Label>
                <input className="form-control fill-color"  type="color" {...register('color', { required: true })} defaultValue="#655af3" />
              </FormGroup>
            </div>
            <Btn color= 'secondary'>{Save}</Btn>&nbsp;&nbsp;
            <Btn color= 'primary' onClick= {tagToggle}>{Cancel}</Btn>
          </Form>
        </ModalBody>
      </Modal>
  );
};
export default CreateTag;