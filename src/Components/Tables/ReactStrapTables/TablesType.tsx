export interface tablesData {
  id: number;
  first_name: string;
  last_name: string;
  user_name: string;
  role: string;
  country: string;
}

interface tableDataType {
  tableData: [] | tablesData[];
}
export interface tableTypes {
  TableDataReducer: tableDataType;
}
