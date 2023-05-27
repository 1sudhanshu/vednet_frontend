import { useEffect } from "react";
import { Container, Row } from "reactstrap";
import LeftSide from "./LeftSide";
import axios from "axios";
import { ContactApi } from "../../../api";
import { useDispatch } from "react-redux";

const ContactsContainer = () => {
  const dispatch = useDispatch();
  const getUsers = async () => {
    try {
      await axios.get(ContactApi).then((resp) => {
        dispatch({ type: "setUsers", payload: resp.data });
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Container fluid={true}>
      <div className="email-wrap bookmark-wrap contacts-items">
        <Row>
          <LeftSide />
        </Row>
      </div>
    </Container>
  );
};

export default ContactsContainer;
