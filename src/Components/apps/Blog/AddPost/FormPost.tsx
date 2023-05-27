import { Typeahead } from 'react-bootstrap-typeahead';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { Title, Type, Category, Content, Text, Audio, Video, Image, BlogPostText } from '../../../../Constant';
import SimpleMDE from "react-simplemde-editor";
import RadioTypeForm from './RadioTypeForm';

const FormPost = () => {
  const data = [{ name: 'Lifestyle' }, { name: 'Travel' }];

  return (
    <Form className='row needs-validation'>
      <Col sm='12'>
        <FormGroup>
          <Label>{Title}:</Label>
          <Input type='text' placeholder='Post Title' />
        </FormGroup>
        <RadioTypeForm/>
        <FormGroup>
          <div className='col-form-Label'>
            {Category}:
            <Typeahead id='multiple-typeahead' className='mt-2' clearButton defaultSelected={data} labelKey='name' multiple options={data} placeholder='Select Your Name....' />
          </div>
        </FormGroup>
        <div className='email-wrapper'>
          <div className='theme-form'>
            <FormGroup>
              <Label>{Content}:</Label>
              <SimpleMDE id="editor_container"  value={BlogPostText} options={{ autofocus: true, spellChecker: false}}/>
            </FormGroup>
          </div>
        </div>
      </Col>
    </Form>
  );
};

export default FormPost;
