import { useForm } from 'react-hook-form';
import { Form, FormGroup, Label, Modal, ModalBody } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { AddBookmark, Cancel, Collection, Description, General, Group, MyBookmarks, Save, Title, WebUrl } from '../../../Constant';
import { useDispatch } from 'react-redux';
import { H5 } from "../../../AbstractElements";
interface propsType{ value:boolean, addToggle :()=>void }

const BookmarkModal = ({addToggle,value}:propsType) => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch =useDispatch() 
  const onSubmit1 = (data:any) => {
    if (data !== '') {
      dispatch({ type: "addNewBookmark", payload: {data, img_url:'lightgallry/01.jpg'} });  
    }
  };
  return (
      <Modal isOpen={value} toggle={addToggle} size="lg" className='modal-bookmark'>
        <div className='modal-header'>
          <H5 className='modal-title'>{AddBookmark}</H5>
          <Btn color= 'transprant' className= 'btn-close' onClick= {addToggle} type= 'button'></Btn>
        </div>
        <ModalBody>
          <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(onSubmit1)} >
            <div className="form-row">
              <FormGroup className="col-md-12">
                <Label>{WebUrl}</Label>
                <input className="form-control"  type="text" autoComplete="off" {...register('url', { required: true })} />
                <span style={{ color: 'red' }}>{errors.url && 'Url is required'}</span>
              </FormGroup>
              <FormGroup className="col-md-12">
                <Label>{Title}</Label>
                <input className="form-control"  type="text" autoComplete="off"{...register('title', { required: true })} />
                <span style={{ color: 'red' }}>{errors.title && 'Title is required'}</span>
              </FormGroup>
              <FormGroup className="col-md-12">
                <Label>{Description}</Label>
                <input className="form-control"  type="textarea" autoComplete="off" {...register('desc', { required: true })} />
                <span style={{ color: 'red' }}>{errors.desc && 'Description is required'}</span>
              </FormGroup>
              <FormGroup className="col mb-0">
                  <Label>{Group}</Label><br />
                  <select className="form-control digits" name="group">
                    <option value="bookmark">{MyBookmarks}</option>
                  </select>
                </FormGroup>
                <FormGroup className="col mb-0" >
                  <Label>{Collection}</Label><br />
                  <select className=" form-control digits" name="collection">
                    <option value="general">{General}</option>
                    <option value="fs">{'fs'}</option>
                  </select>
                </FormGroup>
            </div>
            <Btn color= 'secondary' type= 'submit' >{Save}</Btn>&nbsp;&nbsp;
            <Btn color= 'primary' onClick= {addToggle }>{Cancel}</Btn>
          </Form>
        </ModalBody>
      </Modal>
  );
};
export default BookmarkModal;