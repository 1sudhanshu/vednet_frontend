import DataTable from "react-data-table-component";
import { OrderHistoryTableColumnsData, OrderHistoryTableData,} from "../../../../Data/apps/ecommerce/OrderHistoryTable";

const DataTableOrderHistoryTable = () => {
  return (
    <DataTable
      data={OrderHistoryTableData}
      columns={OrderHistoryTableColumnsData}
      className="table-bordernone display"
      noHeader
      pagination
      paginationServer
    />
  );
};

export default DataTableOrderHistoryTable;
