import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import SearchWebsiteContainer from "../../../../Components/others/SearchPages/SearchWebsite";

const SearchWebsite = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="others" title="Search Website" />
      <SearchWebsiteContainer />
    </div>
  );
};

export default SearchWebsite;
