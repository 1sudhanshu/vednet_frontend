import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { Container, Row, Label, Input } from "reactstrap";
import { Btn } from "../../AbstractElements";
interface propsType {
  icons:  object | string | any;
  itag: any;
}

const IconMarkUp = ({icons,itag}:propsType) => {
  const featherIcons = require("feather-icons");
  const closeIconContainer = () => {
    let closeIcon = document.getElementsByClassName(
      "icon-hover-bottom"
    ) as HTMLCollectionOf<HTMLElement>;
    closeIcon[0].style.display = "none";
  };

  if (itag !== "" && icons !== "") {
    let closeIcon = document.getElementsByClassName(
      "icon-hover-bottom"
    ) as HTMLCollectionOf<HTMLElement>;
    closeIcon[0].style.display = "block";
  }

  return (
    <div className="icon-hover-bottom p-fixed fa-fa-icon-show-div">
      <Container fluid={true}>
        <Row>
          <div className="icon-popup">
            <div className="close-icon" onClick={() => closeIconContainer()}>
              <i className="icofont icofont-close"></i>
            </div>
            <div className='icon-first'>{icons.feathericon ? <div dangerouslySetInnerHTML={{__html:featherIcons.icons[icons.feathericon].toSvg(icons.feathericon)}}/> : <i id='icon_main' className={icons.icon}></i>}</div>
            <div className="icon-class">
              <Label className="icon-title"></Label>
              <span id="fclass1"></span>
            </div>
            <div className="icon-last icon-last">
              <Label className="icon-title">Markup</Label>
              <div className="form-inline">
                <div className="mb-0 form-group">
                  <Input
                    type="text"
                    className="inp-val form-control m-r-10"
                    defaultValue={itag.iTag}
                    id="input_copy"
                  />
                  <CopyToClipboard text={itag.iTag}>
                    <Btn
                      color="primary"
                      className="notification mt-2"
                      onClick={() =>
                        toast.success("Code Copied to clipboard !", {
                          position: toast.POSITION.BOTTOM_RIGHT,
                        })
                      }
                    >
                      Copy text
                    </Btn>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default IconMarkUp;
