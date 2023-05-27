import React from "react";
import CommonHeaderClass from "../../../Common/CommonHeaderClass";

const Float = () => {
  return (
    <CommonHeaderClass title="Float">{`
      .f-left {
        float: left;
        }
        .f-right {
        float: right;
        }
        .f-none {
        float: none;
      }      
    `}</CommonHeaderClass>
  );
};

export default Float;
