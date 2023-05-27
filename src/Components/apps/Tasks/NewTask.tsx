import  { Fragment,  useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, ModalBody, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { CheckCircle } from 'react-feather';
import { AddTask, TaskTitle, Collection, General, Description, Save, Cancel, NewTask } from '../../../Constant';
import { Btn } from '../../../AbstractElements';
import { useDispatch } from 'react-redux';
import { H5 } from "../../../AbstractElements";
const NewTaskClass = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [addModal, setaddModal] = useState(false);
  const addToggle = () => {
    setaddModal(!addModal);
  };
  const dispatch = useDispatch();

  const Addtask = (data:any) => {
    if (data !== '') {
      dispatch({ type: "AddNewTask", payload: data });
      setaddModal(false);
    }  };

  return (
    <Fragment>
      <Btn color= 'primary' className= 'badge-light btn-block btn-mail w-100' onClick= {addToggle}><CheckCircle className="me-2" />  {NewTask}</Btn>
      <Modal isOpen={addModal} toggle={addToggle} size="lg">
        <div className='modal-header'>
          <H5 className='modal-title'>{AddTask}</H5>
          <Btn color= 'transprant' className= 'btn-close' onClick= {addToggle}  ></Btn>
        </div>
        <ModalBody>
          <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(Addtask)}>
            <Row>
              <FormGroup className="col-md-12">
                <Label>{TaskTitle}</Label>
                <input className="form-control"  type="text" {...register('title', { required: true })} />
                <span style={{ color: 'red' }}>{errors.title && 'Title is required'}</span>
              </FormGroup>
              <FormGroup className="col-md-12">
                <Label>{Collection}</Label>
                <Input className="js-example-disabled-results form-select" name="collection" type="select" >
                  <option value="general">{General}</option>
                  <option value="fs">{'Fs'}</option>
                </Input>
              </FormGroup>
              <FormGroup className="col-md-12">
                <Label>{Description}</Label>
                <input className="form-control"  type="textarea" {...register('desc', { required: true })} />
                <span style={{ color: 'red' }}>{errors.desc && 'Description is required'}</span>
              </FormGroup>
            </Row>
            <Btn color= 'secondary' className= 'me-1' >{Save}</Btn>&nbsp;&nbsp;
            <Btn color= 'primary' onClick= {addToggle} >{Cancel}</Btn>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
export default NewTaskClass;