import { useState, useCallback } from "react";
import { Container, Row } from "reactstrap";
import IconMarkUp from "../Icon-markup";
import FontawesomeCommon from "./common/FontawesomeCommon";
import { FontawesomeData } from "../../../Data/icon/fontawsomeData";

const FontAwesomeIconContainer = () => {
  const [iTag, setiTag] = useState<string | object>("");
  const [icon, setIcon] = useState<string | object>("");
  const callback = useCallback((tag: string) => {
    setiTag({
      iTag: '<i className="fa fa-' + tag + '"></i>',
    });
    setIcon({
      icon: "fa fa-" + tag + " fa-2x",
    });
  }, []);
  return (
    <Container fluid={true}>
      <Row>
        {FontawesomeData.map((data, index) => (
          <FontawesomeCommon
            key={index}
            iconType={data.datas}
            title={data.title}
            parentCallback={callback}
          />
        ))}
      </Row>
      <IconMarkUp itag={iTag} icons={icon} />
    </Container>
  );
};

export default FontAwesomeIconContainer;
