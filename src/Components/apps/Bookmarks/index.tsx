import { useEffect } from "react";
import { Card, Col, Container, Row } from "reactstrap";
import BookmarksTabs from "./BookmarksTabs";
import axios from "axios";
import { BookmarkApi } from "../../../api";
import { useDispatch } from "react-redux";
import SideBar from "./SideBar";

const BookmarksContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getBookmMarkData = async () => {
      try {
        await axios.get(BookmarkApi).then((resp) => {
          dispatch({ type: "addData", payload: resp.data });
        });
      } catch (error) {
        console.log("cancelled", error);
      }
    };
    getBookmMarkData();
  },[]);

  return (
    <Container fluid={true}>
      <div className="email-wrap bookmark-wrap">
        <Row>
          <SideBar />
          <Col xl="9" md="12" className="box-col-8 xl-70">
            <div className="email-right-aside bookmark-tabcontent">
              <Card className="email-body radius-left">
                <div className="ps-0">
                  <BookmarksTabs />
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default BookmarksContainer;
