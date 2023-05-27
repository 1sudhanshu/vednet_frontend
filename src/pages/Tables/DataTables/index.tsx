import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import DataTablesContainer from "../../../Components/Tables/DataTables";
const DataTables = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Table" title="Data Table" />
      <DataTablesContainer />
    </div>
  );
};

export default DataTables;
