import { CardBody } from 'reactstrap';
import { P } from '../../../../AbstractElements';
import SettingOneColumnWidthBody from './SettingOneColumnWidthBody';

const SettingOneColumnWidthCardBody = () => {
  return (
    <CardBody className=" grid-showcase">
      <P>
        Auto-layout for flexbox grid columns also means you can set the width of
        one column and have the sibling columns automatically resize around it.
        You may use predefined grid classes (as shown below), grid mixins, or
        inline widths. Note that the other columns will resize no matter the
        width of the center column.
      </P>
      <SettingOneColumnWidthBody />
    </CardBody>
  );
};

export default SettingOneColumnWidthCardBody;
