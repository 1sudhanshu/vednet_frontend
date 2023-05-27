import { Card, Col } from "reactstrap";
import { H4, Image, P } from "../../../../AbstractElements";
import { BrowserWidgetDatas } from "../../../../Data/widgets/BrowserWidget";
import { Fragment } from "react";

const BrowserWidget = () => {
  const images = require.context("../../../../assets/images/dashboard", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      {BrowserWidgetDatas.map((data, index) => (
        <Col md="4" sm="12" key={index}>
          <Card className=" browser-widget">
            <div className="d-flex card-body">
              <div className="d-flex-img">
                <Image src={dynamicImage(data.imgPath)} alt={`${index}image`} />
              </div>
              <div className="flex-grow-1 align-self-center">
                {data.childrenItem &&
                  data.childrenItem.map((data2, index2) => (
                    <div key={index2}>
                      <P> {data2.Heading}</P>
                      <H4>
                        <span className="counter">{data2.Number}</span>%
                      </H4>
                    </div>
                  ))}
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default BrowserWidget;
