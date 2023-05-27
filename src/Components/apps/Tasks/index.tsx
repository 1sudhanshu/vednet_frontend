import { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import NavClass from "./NavClass";
import TabClass from "./TabClass";
import {  useDispatch } from "react-redux";
import { TaskApi } from "../../../api";
import axios from "axios";

const TasksContainer = () => {
  const dispatch = useDispatch();
  const getTask = async () => {
    try {
      await axios.get(TaskApi).then((resp) => {
        dispatch({ type: "setAllTask", payload: resp.data });
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => { getTask();}, []);
  const [activeTab, setActiveTab] = useState("1");
  const activeToggle = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <Container fluid={true}>
      <div className="email-wrap bookmark-wrap tasks-items">
        <Row>
          <NavClass activeToggle={activeToggle} />
          <TabClass activeTab={activeTab} />
        </Row>
      </div>
    </Container>
  );
};

export default TasksContainer;
