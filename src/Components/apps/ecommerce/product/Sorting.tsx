import { Featured, HighestPrices, LowestPrices, ShowingProducts,} from "../../../../Constant";
import { Col, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import {ChangeEvent} from 'react';

const Sorting = () => {
  const dispatch = useDispatch();

  const filterSort = (event:ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "filterSortBy", payload: event.target.value });
  };
  return (
      <Col md="6"  className="text-end mb-2">
        <span className="me-xl-2">{ShowingProducts}</span>
        <div
          className="select2-drpdwn-product select-options d-inline-block"
          onChange={filterSort}
        >
          <Input
            className="form-select btn-square"
            type="select"
            name="select"
          >
            <option value="Featured">{Featured}</option>
            <option value="LowestPrices">{LowestPrices}</option>
            <option value="HighestPrices">{HighestPrices}</option>
          </Input>
        </div>
      </Col>
  );
};
export default Sorting;
