import { Card, CardBody, Col } from "reactstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import { positionUSA } from "../../../../Data/apps/LeafletMapData";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { LeafletUkMap } from "../../../../Constant";

const USAMap = () => {
const spanText ="Below Map is displaying the UK map."
    return (
      <Col sm="6">
        <Card>
          <HeadingCommon Heading={LeafletUkMap} span dangerouslySetInnerHTML={spanText}/>
          <CardBody>
            <MapContainer
              className="jvector-map-height"
              style={{ height: 389 }}
              zoom={13}
              center={positionUSA}
              attributionControl={true}
              zoomControl={true}
              doubleClickZoom={true}
              scrollWheelZoom={true}
              dragging={true}
              easeLinearity={0.35}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </CardBody>
        </Card>
      </Col>
  );
};
export default USAMap;
