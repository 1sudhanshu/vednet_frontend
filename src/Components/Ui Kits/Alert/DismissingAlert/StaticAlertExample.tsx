import  { useState } from "react";
import { Alert } from "reactstrap";

const StaticAlertExample = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <Alert
      isOpen={visible}
      toggle={onDismiss}
      className={`alert-primary dark alert-dismissible fade show    `}
      role="alert"
    >
      <strong>Holy ! </strong> You can check in on some of those fields below.
    </Alert>
  );
};

export default StaticAlertExample;
