import React from "react";
import CommonHeaderClass from "../../../Common/CommonHeaderClass";

const TextColor = () => {
  return (
    <CommonHeaderClass title="Text Color">{`
      .font-primary {
        color: #ab8ce4 !important;
        }
        .font-secondary {
        color: #26c6da !important;
        }
        .font-success {
        color: #00c292 !important;
        }
        .font-danger {
        color: #FF5370 !important;
        }
        .font-info {
        color: #4099ff !important;
        }
        .font-light {
        color: #eeeeee !important;
        }
        .font-dark {
        color: #2a3142 !important;
        }
        .font-warning {
        color: #f3d800 !important;
      }
    `}</CommonHeaderClass>
  );
};
export default TextColor;