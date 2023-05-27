import { useState } from "react";
import { CardHeader } from "reactstrap";
import { Btn, H5 } from "../../../../AbstractElements";
import { Day, Detailsofourbestsaleproduct, Month, ProductDetailsHeading, Week } from "../../../../Constant";

const ProductDetailsHeader = () => {
    const [time, setTime] = useState(Month);
    let datas = [Day, Week, Month];
  
    return (
    <CardHeader className=" card-no-border">
      <H5>{ProductDetailsHeading}</H5>
      <span>{Detailsofourbestsaleproduct}</span>
      <div className="dashboard-btn-groups">
        <div className="btn-group" role="group">
          {datas.map((data, index) => (
            <Btn
              key={index}
              color="deafult"
              onClick={() => setTime(data)}
              className={`btn btn-outline-light btn-js1 ${
                time === data ? "active" : ""
              }`}
            >
              {data}
            </Btn>
          ))}
        </div>
      </div>
    </CardHeader>
  );
};

export default ProductDetailsHeader;
