
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import SearchVideoContainer from "../../../../Components/others/SearchPages/SearchVideo";

const SearchVideo = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="others" title="Search Video" />
      <SearchVideoContainer />
    </div>
  );
};

export default SearchVideo;
