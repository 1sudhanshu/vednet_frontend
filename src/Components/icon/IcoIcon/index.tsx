import { Fragment, useState, useCallback } from "react";
import { Container, Row } from "reactstrap";
import IconMarkUp from "../Icon-markup";
import IcoCommon from "./common/IcoCommon";
import { icoIconData } from "../../../Data/icon/icoData";

const IcoIconsContainer = () => {
  const [iTag, setiTag] = useState<string | object>("");
  const [icon, setIcon] = useState<string | object>("");

  const callback = useCallback((tag: string) => {
    setiTag({
      iTag: '<i className="icofont icofont-' + tag + '"></i>',
    });
    setIcon({
      icon: "icofont icofont-" + tag + " fa-2x",
    });
  }, []);

  return (
    <Fragment>
      <Container fluid={true}>
        {icoIconData.map((data, index) => {
          return (
            <Row key={index}>
              <IcoCommon iconType={data.icons} title={data.tittle} parentCallback={callback}/>
            </Row>
          );
        })}
      </Container>
      <IconMarkUp itag={iTag} icons={icon} />
    </Fragment>
  );
};
export default IcoIconsContainer;
