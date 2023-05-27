import { Fragment, useEffect } from "react";
import axios from "axios";
import {Container,Row,Col,Card,CardHeader,CardBody,Input,} from "reactstrap";
import { H5 } from "../../../AbstractElements";
import { useDispatch, useSelector } from "react-redux";
import { StickyReducerTypes, notesState } from "./StickyReducerType";

const StickyContain = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state: StickyReducerTypes) => state.StickyReducer);

  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/sticky.json`).then((res) => dispatch({ type: "setNotes", payload: res.data }));}, []);

  const addStickyNote = () => {
    dispatch({type: "setNotes",payload: [...notes, { id: notes.length + 1, isDeleted: false }],});
  };
  const deleteNote = (note: notesState) => {
    const notelist= notes.filter((item) => item.id !== note.id);
    dispatch({ type: "setNotes", payload: notelist });
  };

  return (
    <Fragment>
      <Container fluid={true}>
        <Row className="sticky-header-main">
          <Col sm="12">
            <Card>
              <CardHeader>
                <H5>
                  Sticky Note
                  <a
                    href="#javascript"
                    onClick={addStickyNote}
                    className="btn btn-primary pull-right m-l-10"
                  >
                    Add New Note
                  </a>
                </H5>
              </CardHeader>
              <CardBody>
                <div
                  className="sticky-note"
                  id="board"
                >
                  {notes.map((data, index) => (
                    <div
                      className={`note ui-draggable ui-draggable-handle `}
                      key={index}
                    >
                      <a
                        href="#javascript"
                        onClick={() => deleteNote(data)}
                        className="button remove"
                      >
                        X
                      </a>
                      <div className="note_cnt">
                        <Input
                          className="title"
                          placeholder="Enter note title"
                          type="textarea"
                          style={{ height: "64px" }}
                        ></Input>
                        <Input
                          className="cnt"
                          placeholder="Enter note description here"
                          type="textarea"
                          style={{ height: "200px" }}
                        ></Input>
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default StickyContain;
