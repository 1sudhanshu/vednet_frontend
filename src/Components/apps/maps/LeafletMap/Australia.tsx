import { Card, CardBody, Col } from "reactstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import { centerAustralia } from "../../../../Data/apps/LeafletMapData";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { LeafletAustraliaMap } from "../../../../Constant";

const AustraliaMap = () => {
  const spanText = "Below Map is displaying the Australia map."
  return (
    <Col sm="6">
      <Card>
        <HeadingCommon Heading={LeafletAustraliaMap} span dangerouslySetInnerHTML={spanText}/>
        <CardBody>
          <MapContainer
            className="jvector-map-height"
            style={{ height: 389 }}
            zoom={4}
            center={centerAustralia}
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
export default AustraliaMap;
