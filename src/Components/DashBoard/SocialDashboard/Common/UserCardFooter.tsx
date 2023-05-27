import React from "react";
import { CardFooter } from "reactstrap";
import { LI, UL } from "../../../../AbstractElements";
import { Message, ViewProfile } from "../../../../Constant";

const UserCardFooter = () => {
  return (
    <CardFooter className=" p-0">
      <UL className="flex-row simple-list">
        <LI>
          <span>{ViewProfile}</span>
        </LI>
        <LI>
          <span>{Message}</span>
        </LI>
      </UL>
    </CardFooter>
  );
};

export default UserCardFooter;
