import { Comment } from "../../../../Constant";
import { H4, UL } from "../../../../AbstractElements";
import UserComment from "./common/UserComment";

const CommentSection = () => {
  return (
    <section className="comment-box">
      <H4>{Comment}</H4>
      <hr />
      <UL className="simple-list">
        <UserComment ImageSrc="comment.jpg" mainDivClassName="align-self-center"/>
        <UserComment ImageSrc="comment.jpg" mainDivClassName="align-self-center" userReplay={true}/>
        <UserComment ImageSrc="4.jpg" />
        <UserComment ImageSrc="12.png" />
        <UserComment ImageSrc="14.png" />
      </UL>
    </section>
  );
};

export default CommentSection;
