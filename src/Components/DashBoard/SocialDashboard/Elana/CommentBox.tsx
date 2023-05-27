import { Image } from "../../../../AbstractElements";
import { Input } from "reactstrap";

const CommentBox = () => {
  const images = require.context("../../../../assets/images", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };

  return (
    <div className="comments-box">
      <div className="d-flex">
        <Image
          className="img-40 img-fluid m-r-20 rounded-circle"
          alt="elana"
          src={dynamicImage("user/1.jpg")}
        />
        <div className="flex-grow-1">
          <div className="input-group text-box">
            <Input className="input-txt-bx" placeholder="Post Your commnets" />
            <div className="input-group-append">
              <button className="btn btn-transparent" type="button">
                <i className="fa fa-smile-o"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
