import { useSelector } from "react-redux";
import { tableTypes, tablesData } from "../../TablesType";

const InversTableClassTBody = () => {
  const { tableData } = useSelector((state: tableTypes) => state.TableDataReducer);

  return (
    <tbody>
      {tableData.map((item: tablesData) => (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.user_name}</td>
          <td>{item.role}</td>
          <td>{item.country}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default InversTableClassTBody;
