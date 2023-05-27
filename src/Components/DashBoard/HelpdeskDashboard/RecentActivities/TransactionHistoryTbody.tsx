import { P } from "../../../../AbstractElements";
import { TransactionHistoryDatas } from "../../../../Data/Components/HelpdeskDashBoard/TransactionHistory";

const TransactionHistoryTbody = () => {
  return (
    <tbody>
      {TransactionHistoryDatas.map((data, index) => (
        <tr key={index}>
          <td>
            <div className="d-flex">
              <div className={data.iconClass}>{data.icon}</div>
              <div className="flex-grow-1">
                <span className="f-12 f-w-600">{data.text}</span>
              </div>
            </div>
          </td>
          <td>
            <P className="f-w-600">{data.date}</P>
          </td>
          <td>
            <div className={data.badgeClass}>{data.badge}</div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TransactionHistoryTbody;
