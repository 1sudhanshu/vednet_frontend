import { orderHistoryTableDataType } from "../../../../../Data/apps/ecommerce/orderHistory";

const OrderHistoryTittleRow = ({ data }: orderHistoryTableDataType) => {
  return (
    <tr className="title-orders">
      <td colSpan={12} className="text-left">{data.heading}</td>
    </tr>
  );
};

export default OrderHistoryTittleRow;
