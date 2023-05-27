import { UserPlus } from "react-feather";
import { Btn } from "../../../../AbstractElements";

const OptionSocial = () => {
  return (
    <div className="option-social">
      <Btn className=" btn-outline-light" color="deafult">
        <UserPlus /> Add Friend
      </Btn>&nbsp;
      <Btn className=" btn-outline-light" color="deafult">
        Remove
      </Btn>
    </div>
  );
};

export default OptionSocial;
