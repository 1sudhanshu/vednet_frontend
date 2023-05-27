import {ArticleNumber,Color,Prdouct,PrdouctName,Price,Size,Units} from "../../../../../Constant";

const OrderHistoryTableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">{Prdouct}</th>
        <th scope="col">{PrdouctName}</th>
        <th scope="col">{Size}</th>
        <th scope="col">{Color}</th>
        <th scope="col">{ArticleNumber}</th>
        <th scope="col">{Units}</th>
        <th scope="col">{Price}</th>
        <th scope="col">
          <i className="fa fa-angle-down" />
        </th>
      </tr>
    </thead>
  );
};

export default OrderHistoryTableHead;
