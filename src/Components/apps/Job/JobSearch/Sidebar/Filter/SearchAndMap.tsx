import { Input } from "reactstrap";
import FeatherIconCommon from "../../../../../../Common/FeatherIconCommon";

const SearchAndMap = () => {
  return (
    <>
      <div className="job-filter">
        <div className="faq-form">
          <Input type="text" placeholder="Search.." />
          <FeatherIconCommon iconName="Search" className="search-icon" />
        </div>
      </div>
      <div className="job-filter">
        <div className="faq-form">
          <Input type="text" placeholder="location.." />
          <FeatherIconCommon iconName="MapPin" className="search-icon" />
        </div>
      </div>
    </>
  );
};

export default SearchAndMap;
