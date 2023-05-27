import { Card } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import SettingOneColumnWidthCardBody from "./SettingOneColumnWidthCardBody";

const SettingOneColumnWidth = () => {
  return (
    <Card>
      <HeadingCommon Heading="Setting one column width" />
      <SettingOneColumnWidthCardBody />
    </Card>
  );
};

export default SettingOneColumnWidth;
