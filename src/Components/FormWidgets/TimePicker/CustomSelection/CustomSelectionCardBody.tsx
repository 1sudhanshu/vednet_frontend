import { CardBody, Form, FormGroup } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

const CustomSelectionCardBody = () => {
  return (
      <CardBody>
        <div id="bloodhound">
          <Form className="theme-form">
            <FormGroup>
              <Typeahead id="custom-typeahead" allowNew multiple newSelectionPrefix="Add a new item: " options={[]} placeholder="Type anything..."/>
            </FormGroup>
          </Form>
        </div>
      </CardBody>
  );
};
export default CustomSelectionCardBody;