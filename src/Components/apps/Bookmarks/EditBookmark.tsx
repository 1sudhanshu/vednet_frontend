import {  useForm } from 'react-hook-form';
import { Form, FormGroup, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { Cancel, Collection, Description, EditBookmark, General, Group, MyBookmarks, Save, Title, WebUrl } from '../../../Constant';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, bookMarkType } from './ReducerTypes';

const EditBookmarkModal = () => {
  const {editRow,editModal } = useSelector((state:RootState) => state.BookMarkReducer);
  const dispatch =useDispatch()
  const editToggle = () => {dispatch({ type: "setEditModal", payload: !editModal });  };
  const { register, handleSubmit, formState: { errors } } = useForm();
  const Updatenewbookmark = (id:number, data:bookMarkType, image_url:string) => {
    dispatch({ type: "updateBookMark", payload: {id, data, image_url} });  
  };
  const UpdateBookMark = (data:any) => {
    if (data !== '') {
      Updatenewbookmark(editRow.id, data, 'lightgallry/01.jpg');
      dispatch({ type: "setEditModal", payload: !editModal });  
    }
  };

  return (
      <Modal isOpen={editModal} toggle={editToggle} size="lg">
        <ModalHeader toggle={editToggle}>{EditBookmark}</ModalHeader>
        <ModalBody>
          <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(UpdateBookMark)} >
            <div className="form-row">
              <FormGroup className="col-md-12">
                <Label>{WebUrl}</Label>
                <input className="form-control"  type="text" defaultValue={editRow?.website_url} autoComplete="off" {...register('url', { required: true })} />
                <span style={{ color: 'red' }}>{errors.url && 'Url is not required'}</span>
              </FormGroup>
              <FormGroup className="col-md-12">
                <Label>{Title}</Label>
                <input className="form-control"  type="text" defaultValue={editRow.title} autoComplete="off"{...register('title', { required: true })} />
                <span style={{ color: 'red' }}>{errors.title && 'Title is required'}</span>
              </FormGroup>
              <FormGroup className="col-md-12">
                <Label>{Description}</Label>
                <input className="form-control"  type="textarea" defaultValue={editRow.desc} autoComplete="off" {...register('desc', { required: true })}/>
                <span style={{ color: 'red' }}> {errors.desc && 'Description is required'}</span>
              </FormGroup>
              <FormGroup className="col mb-0">
                  <Label>{Group}</Label>
                  <select className="form-control digits" name="group">
                    <option value="bookmark">{MyBookmarks}</option>
                  </select>
                </FormGroup>
                <FormGroup className="col mb-0">
                  <Label>{Collection}</Label>
                  <select className=" form-control digits" name="collection">
                    <option value="general">{General}</option>
                    <option value="fs">{'fs'}</option>
                  </select>
                </FormGroup>
            </div>
            <Btn color= 'primary' type= 'submit'>{Save}</Btn>&nbsp;&nbsp;
            <Btn color= 'secondary' onClick= {editToggle} >{Cancel} </Btn>
          </Form>
        </ModalBody>
      </Modal>
  );
};
export default EditBookmarkModal;