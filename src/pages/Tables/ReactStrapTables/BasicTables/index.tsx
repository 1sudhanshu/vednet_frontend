import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import BaiscTableComponent from "../../../../Components/Tables/ReactStrapTables/BaiscTable";
const BasicTables = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="ReactStrap Table" title="Basic Table" />
      <BaiscTableComponent />
    </div>
  );
};

export default BasicTables;
