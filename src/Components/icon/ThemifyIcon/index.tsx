import { Fragment, useState, useCallback } from "react";
import { Container, Row } from "reactstrap";
import IconMarkUp from "../Icon-markup";
import ThemifyCommon from "./common/ThemifyCommon";
import { themifyIcoData } from "../../../Data/icon/themifyData";

const ThemifyIconContainer = () => {
  const [iTag, setiTag] = useState<string | object>("");
  const [icon, setIcon] = useState<string | object>("");

  const callback = useCallback((tag: string) => {
    setiTag({
      iTag: '<i className= "' + tag + '"></i>',
    });
    setIcon({
      icon: "" + tag + " fa-2x",
    });
  }, []);

  return (
    <Fragment>
      <Container fluid={true}>
        {themifyIcoData.map((icons, index) => {
          return (
            <Row key={index}>
              <ThemifyCommon
                iconType={icons.datas}
                title={icons.tittle}
                parentCallback={callback}
              />
            </Row>
          );
        })}
      </Container>
      <IconMarkUp itag={iTag} icons={icon} />
    </Fragment>
  );
};
export default ThemifyIconContainer;
