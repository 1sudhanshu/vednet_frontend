import { Card, CardBody, Col } from "reactstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import { positionIndia } from "../../../../Data/apps/LeafletMapData";
import { LeafletIndiaMap } from "../../../../Constant";
import HeadingCommon from "../../../../Common/HeadingCommon";

const IndiaMap = () => {
  const spanText = "Below Map is displaying the India map.";
  return (
    <Col sm="6">
      <Card>
        <HeadingCommon Heading={LeafletIndiaMap} span dangerouslySetInnerHTML={spanText}/>
        <CardBody>
          <MapContainer
            className="jvector-map-height"
            style={{ height: 389 }}
            zoom={5}
            center={positionIndia}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={false}
            dragging={true}
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
export default IndiaMap;
