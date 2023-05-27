import { H4 } from "../../../../AbstractElements";
import { Hours, ItemDescriptions, Rate, Sub_total } from "../../../../Constant";

const TableHeadings = () => {
  return (
    <tr>
      <td className="item">
        <H4 className="p-2 mb-0">{ItemDescriptions}</H4>
      </td>
      <td className="Hours">
        <H4 className="p-2 mb-0">{Hours}</H4>
      </td>
      <td className="Rate">
        <H4 className="p-2 mb-0">{Rate}</H4>
      </td>
      <td className="subtotal">
        <H4 className="p-2 mb-0">{Sub_total}</H4>
      </td>
    </tr>
  );
};

export default TableHeadings;
