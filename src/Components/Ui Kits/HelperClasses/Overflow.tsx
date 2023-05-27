import React from "react";
import CommonHeaderClass from "../../../Common/CommonHeaderClass";

const Overflow = () => {
  return (
    <CommonHeaderClass title="Overflow">{`
      .o-hidden {
        overflow: hidden;
        }
        .o-visible {
        overflow: visible;
        }
        .o-auto {
        overflow: auto;
      }
    `}</CommonHeaderClass>
  );
};

export default Overflow;
