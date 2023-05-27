import { useState } from "react";
import { Row, Card, Col } from "reactstrap";
import { Image } from "../../../../AbstractElements";
import { Href } from "../../../../Constant";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import SweetAlert from "sweetalert2";
import { RootState, bookMarkType } from "../ReducerTypes";
import NoBookmarksFoundComponent from "./NoBookmarksFoundComponent";
import FavDesciptionData from "./FavDesciptionData";

const FavDataLoop = () => {
  const { mybookmarkData } = useSelector((state: RootState) => state.BookMarkReducer);
  const dispatch = useDispatch();
  const [editModal, seteditModal] = useState(false);
  const Remove_from_favourite = (data: bookMarkType) => {
    if (data.fillstar) {
      dispatch({ type: "updateFavFilStar", payload: data.id });
      dispatch({ type: "removeMyBookMark", payload: data.id });
      dispatch({type: "updateBooMark",payload: { id: data.id, data, image_url: data.image },});
    }
  };
  const editToggle = () => {seteditModal(!editModal);};
  const [editrow, setEditrow] = useState({});
  const [editimgurl, setEditImgUrl] = useState();
  const editbookmarkdata = (data: bookMarkType) => {
    editToggle();
    setEditrow(data);
    setEditImgUrl(require(`../../../../assets/images/${data.image}`));
  };
  const Remove_from_my_bookmark = (mybookmarkId: number) => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        dispatch({ type: "removeMyBookMark", payload: mybookmarkId });
        SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        SweetAlert.fire("Your imaginary file is safe!");
      }
    });
  };
  var images = require.context("../../../../assets/images", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <Row>
      {mybookmarkData.length > 0 ? (
        mybookmarkData.map((myBookData: bookMarkType) => (
          <Col xl="3" className="xl-50" md="4" key={myBookData.id}>
            <Card className="card-with-border bookmark-card o-hidden">
              <div className="details-website">
                <Image className="img-fluid" src={`${dynamicImage(myBookData.image)}`} alt="Image"/>
                <div className={`favourite-icon favourite_0 ${ myBookData.fillstar ? "favourite" : ""}`}>
                  <a href={Href}><i className="fa fa-star" onClick={() => Remove_from_favourite(myBookData)}></i></a>
                </div>
                <FavDesciptionData myBookData={myBookData} editbookmarkdata={editbookmarkdata} Remove_from_my_bookmark={Remove_from_my_bookmark}/>
              </div>
            </Card>
          </Col>
        ))) : (<NoBookmarksFoundComponent />)}
    </Row>
  );
};
export default FavDataLoop;