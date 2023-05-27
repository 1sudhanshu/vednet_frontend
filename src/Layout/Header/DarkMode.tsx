import { Fragment, useEffect, useState } from "react";
import { Moon } from "react-feather";
import { LI } from "../../AbstractElements";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-only");
    } else {
      document.body.classList.remove("dark-only");
    }
  }, [darkMode]);

  return (
    <Fragment>
      
    </Fragment>
  );
};

export default DarkMode;
