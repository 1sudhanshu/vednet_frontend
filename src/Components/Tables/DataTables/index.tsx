import {  useState, useCallback, useMemo } from 'react';
import differenceBy from 'lodash/differenceBy';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { tableColumns, tableData } from '../../../Data/table/DataTable';
import HeadingCommon from '../../../Common/HeadingCommon';
import { DataTableHeading } from '../../../Constant';

const DataTablesContainer = () => {
  const [data, setData] = useState(tableData);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [toggleCleared, setToggleCleared] = useState(false);

  const handleRowSelected = useCallback((state:any) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const contextActions = useMemo(() => {
    const handleDelete = () => {
      if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map((r:any) => r.name)}?`)) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, 'name'));
        toast.success('Successfully Deleted !');
      }
    };

    return <Btn  color= 'danger'  onClick= {handleDelete}  key="delete">Delete</Btn>;
  }, [data, selectedRows, toggleCleared]);
  return (
    <Container fluid={true} className="data-tables">
        <Row>
          <Col sm="12">
            <Card>
              <HeadingCommon Heading={DataTableHeading} />
              <CardBody>
                <DataTable
                  data={data}
                  columns={tableColumns}
                  striped={true}
                  persistTableHead
                  contextActions={contextActions}
                  onSelectedRowsChange={handleRowSelected}
                  clearSelectedRows={toggleCleared}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
  )
}

export default DataTablesContainer