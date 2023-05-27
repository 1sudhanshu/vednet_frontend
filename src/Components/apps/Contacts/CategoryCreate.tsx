import React, { Fragment, useState } from 'react';
import { Form, FormGroup, Input, ModalBody, Modal, Row } from 'reactstrap';
import { AddCategory, Cancel, Save } from '../../../Constant';
import { Btn } from '../../../AbstractElements';
import { H5 } from "../../../AbstractElements";

const CategoryCreate = () => {
  const [categoryModal, setCategoryModal] = useState(false);
  const categoryToggle = () => {
    setCategoryModal(!categoryModal);
  };

  return (
    <Fragment>
      <Btn color= 'transparent' className='btn btn-category' onClick= {categoryToggle}  ><span className="title"> + {AddCategory}</span></Btn>
      <Modal isOpen={categoryModal} toggle={categoryToggle}>
        <div className='modal-header'>
          <H5 className='modal-title'>{AddCategory}</H5>
          <Btn  color= 'transprant' className= 'btn-close' onClick= {categoryToggle} type= 'button'  ></Btn>
        </div>
        <ModalBody>
          <Form className="form-bookmark">
            <Row>
              <FormGroup className="mb-3 col-md-12 my-0">
                <Input className="form-control" type="text" required placeholder="Enter category name" autoComplete="off" />
              </FormGroup>
            </Row>
            <Btn color= 'secondary' onClick= {categoryToggle }>{Save}</Btn>&nbsp;&nbsp;
            <Btn color= 'primary' className= 'ms-1' onClick= {categoryToggle }>{Cancel}</Btn>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default CategoryCreate;