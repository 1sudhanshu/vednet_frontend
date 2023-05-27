import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import BookmarksContainer from "../../../Components/apps/Bookmarks";
const Bookmarks = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Apps" title="Bookmarks" />
      <BookmarksContainer />
    </div>
  );
};

export default Bookmarks;
