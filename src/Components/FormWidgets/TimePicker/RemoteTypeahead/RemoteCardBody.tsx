import { Btn } from "../../../../AbstractElements";
import { useEffect, useRef, useState } from "react";
import { ButtonToolbar, Form, FormGroup } from "reactstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import axios from "axios";

const RemoteCardBody = () => {
  const ref = useRef<any>();
  const [options, setOptions] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/api/typeaheadData.json`)
      .then((res) => setOptions(res.data));
  }, []);
  return (
      <Form className="theme-form">
        <FormGroup>
          <Typeahead id="public-typeahead" defaultSelected={options.slice(0, 4)} labelKey="name" multiple options={options} placeholder="Choose a state..." ref={ref}/>
          <ButtonToolbar style={{ marginTop: "10px" }}>
            <Btn className="mx-1 mt-2"  onClick={() => ref.current.clear()}>Clear</Btn>
            <Btn className="mx-1 mt-2"  onClick={() => ref.current.focus()}>Focus</Btn>
            <Btn className= "mx-1 mt-2"  onClick={ () => {ref.current.focus(); setTimeout(() => ref.current.blur(), 1000)}}>
              Focus, then blur after 1 second
            </Btn>
          </ButtonToolbar>
        </FormGroup>
      </Form>
  );
};
export default RemoteCardBody;
