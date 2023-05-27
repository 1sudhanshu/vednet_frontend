import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import SingleBlogContainer from "../../../Components/apps/Blog/SingleBlog";
const Blog = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Blog" title="Single Blog" />
      <SingleBlogContainer />
    </div>
  );
};

export default Blog;