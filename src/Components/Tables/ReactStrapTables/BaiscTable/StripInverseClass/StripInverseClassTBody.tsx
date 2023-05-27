import { useSelector } from "react-redux";
import { tableTypes, tablesData } from "../../TablesType";

const StripInverseClassTBody = () => {
  const { tableData } = useSelector(
    (state: tableTypes) => state.TableDataReducer
  );

  return (
    <tbody>
      {tableData.slice(0, 3).map((item: tablesData) => (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.user_name}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default StripInverseClassTBody;
