import {  useCallback, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Btn, H4 } from '../../../AbstractElements';
import { supportColumns, supportData, supportDataType } from '../../../Data/apps/SupportTicket';
import { Delete } from '../../../Constant';

const TicketTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [data, setData] = useState(supportData);

  const handleRowSelected = useCallback((state:any) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map((r:supportDataType) => r.name)}?`)) {
      setToggleDelete(!toggleDelete);
      setData(data.filter((item) => selectedRows.filter((elem:supportDataType) => elem.id === item.id).length > 0 ? false : true));
      setSelectedRows([]);
    }
  };
  return (
      <div className="table-responsive support-table">
        {(selectedRows.length !== 0) &&
          <div className={`d-flex align-items-center justify-content-between bg-light-info p-2`}>
            <H4 className= 'text-muted m-0' >Delete Selected Data..!</H4>
            <Btn color= 'danger' onClick= {() => handleDelete() }>{Delete}</Btn>
          </div>
        }
        <DataTable
          columns={supportColumns}
          data={data}
          striped={true}
          pagination
          selectableRows
          onSelectedRowsChange={handleRowSelected}
          clearSelectedRows={toggleDelete}
        />
      </div>
  );
};
export default TicketTable;