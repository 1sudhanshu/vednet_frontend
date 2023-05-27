import { Card, CardBody,  Col, Container, Row } from "reactstrap";
import TodoList from "./TodoList";
import axios from "axios";
import { TodoApi } from "../../../api";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";

const TodoContainer = () => {
  const dispatch = useDispatch();
  const fetchTodo = async () => {
    try {
      await axios.get(`${TodoApi}`).then((resp) => {
        dispatch({ type: "setAllTodo", payload: resp.data });
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchTodo();
  }, []);
  return (
    <Container fluid={true}>
      <Row>
        <Col xl="12">
          <Card>
            <TodoHeader />
            <CardBody>
              <div className="todo">
                <div className="todo-list-wrapper">
                  <div className="todo-list-container">
                    <TodoList />
                    <TodoFooter/>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoContainer;
