import { Label } from "reactstrap";
import { LI, UL } from "../../../../../../AbstractElements";

const LikeComment = () => {
  return (
    <div className="like-comment mt-4">
      <UL className="simple-list list-inline flex-row">
        <LI className="list-inline-item border-right pe-3">
          <Label className="m-0">
            <a href="#javscript">
              <i className="fa fa-heart" />
            </a>
            &nbsp;&nbsp;Like
          </Label>
          <span className="ms-2 counter">2659</span>
        </LI>
        <LI className="list-inline-item ms-2">
          <Label className="m-0">
            <a href="#javscript">
              <i className="fa fa-comment" />
            </a>
            &nbsp;&nbsp;Comment
          </Label>
          <span className="ms-2 counter">569</span>
        </LI>
      </UL>
    </div>
  );
};

export default LikeComment;
