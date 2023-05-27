import { Dispatch, Fragment, SetStateAction } from "react";
import { Input } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
interface propType {
  decimal?: boolean;
  val: number;
  step?: boolean;
  setVal: Dispatch<SetStateAction<number>>;
  vertical?: boolean;
}
const CommonTouchSpin = ({
  decimal,
  val,
  step,
  setVal,
  vertical,
}: propType) => {
  const onChangeHandel = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const number = Number(event.target.value);
    setVal(number);
  };
  const Minus = () => {
    if (decimal) {
      setVal(val - 0.25);
    } else if (step === true) {
      setVal(val - 10);
    } else {
      setVal(val - 1);
    }
  };
  const Addition = () => {
    if (decimal) {
      setVal(val + 0.25);
    } else if (step) {
      setVal(val + 10);
    } else {
      setVal(val + 1);
    }
  };
  return (
    <Fragment>
      {vertical ? (
        <Input
          className="touchspin"
          type="number"
          name="quantity"
          defaultValue={val}
          style={{ display: "block" }}
        />
      ) : (
        <div className="input-group bootstrap-touchspin">
          <Btn className="bootstrap-touchspin-down" onClick={Minus}>
            <i className="fa fa-minus"></i>
          </Btn>

          <Input
            className="touchspin"
            type="text"
            value={val}
            onChange={(e) => onChangeHandel(e)}
          />

          <Btn className="bootstrap-touchspin-up btn-square" onClick={Addition}>
            <i className="fa fa-plus"></i>
          </Btn>
        </div>
      )}
    </Fragment>
  );
};
export default CommonTouchSpin;
