import { ContextualClassesTableData } from "../../../../../Data/table/ReactStrepTable";

const ContextualClassesTBody = () => {
  return (
    <tbody>
      {ContextualClassesTableData.map((data, index) => (
        <tr className={data.class} key={index}>
          <th scope="row">{data.trClass}</th>
          <td>{data.td1}</td>
          <td>{data.td2}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default ContextualClassesTBody;
