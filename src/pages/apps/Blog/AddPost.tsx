import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import AddPostContainer from "../../../Components/apps/Blog/AddPost";
const AddPost = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Blog" title="Add Post" />
      <AddPostContainer />
    </div>
  );
};

export default AddPost;
