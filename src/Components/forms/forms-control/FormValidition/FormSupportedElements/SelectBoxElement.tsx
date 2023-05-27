import { InvalidFeedBack, One, SelectMenu, Three, Two } from "../../../../../Constant";

const SelectBoxElement = () => {
  return (
    <div className="mb-3">
      <select className="form-select" required aria-label="select example">
        <option value="">{SelectMenu}</option>
        <option value={1}>{One}</option>
        <option value={2}>{Two}</option>
        <option value={3}>{Three}</option>
      </select>
      <div className="invalid-feedback">{InvalidFeedBack}</div>
    </div>
  );
};

export default SelectBoxElement;
