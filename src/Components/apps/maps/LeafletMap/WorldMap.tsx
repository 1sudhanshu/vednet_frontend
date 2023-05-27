import { Card, CardBody, Col } from "reactstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { LeafletWorldMap } from "../../../../Constant";

const WorldMap = () => {
  const position = { lat: 50, lng: 10 };
  const spanText ="Below Map is displaying the world map."
  return (
      <Col sm="6">
        <Card>
          <HeadingCommon Heading={LeafletWorldMap} span dangerouslySetInnerHTML={spanText} />
          <CardBody>
            <MapContainer
              style={{ height: 389 }}
              easeLinearity={0.35}
              attributionControl={true}
              center={position}
              zoom={13}
              scrollWheelZoom={true}
              className="jvector-map-height"
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
export default WorldMap;
