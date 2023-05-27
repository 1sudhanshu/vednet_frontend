import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import BlogDetailsContainer from "../../../Components/apps/Blog/BlogDetails";
const Blog = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Blog" title="Blog Details" />
      <BlogDetailsContainer />
    </div>
  );
};

export default Blog;
