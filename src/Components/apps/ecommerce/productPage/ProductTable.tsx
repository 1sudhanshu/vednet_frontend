import React from "react";

const ProductTable = () => {
  return (
    <div>
      <table className="product-page-width">
        <tbody>
          <tr>
            <td>Brand :</td>
            <td>shopcart_fashion</td>
          </tr>
          <tr>
            <td>Availability :</td>
            <td className="in-stock">In stock</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
