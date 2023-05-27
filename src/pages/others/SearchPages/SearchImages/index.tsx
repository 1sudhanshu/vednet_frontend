import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import SearchImagesContainer from "../../../../Components/others/SearchPages/SearchImages";

const SearchImages = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="others" title="Search Images" />
      <SearchImagesContainer />
    </div>
  );
};

export default SearchImages;
