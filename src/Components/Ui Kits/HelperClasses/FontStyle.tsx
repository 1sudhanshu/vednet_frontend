import React from "react";
import CommonHeaderClass from "../../../Common/CommonHeaderClass";

const FontStyle = () => {
  return (
    <CommonHeaderClass title="Font Style">{`
     .f-s-normal {
        font-style: normal;
        }
        .f-s-italic {
        font-style: italic;
        }
        .f-s-oblique {
        font-style: oblique;
        }
        .f-s-initial {
        font-style: initial;
        }
        .f-s-inherit {
        font-style: inherit;
      }
    `}</CommonHeaderClass>
  );
};

export default FontStyle;
