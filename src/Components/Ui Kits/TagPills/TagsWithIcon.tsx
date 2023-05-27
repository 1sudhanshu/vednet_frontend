import { DollarSign } from "react-feather";
import { Card, CardBody } from "reactstrap";
import { TagsIcon } from "../../../Data/Components/TagPills";
import HeadingCommon from "../../../Common/HeadingCommon";
export interface TagsWithIcontypes {
  class: string;
  Tittle: JSX.Element;
}

const TagsWithIcon = () => {
  return (
    <Card>
      <HeadingCommon Heading="Tags With Icon" />
      <CardBody className="digits">
        <a href="#javascript" className="badge badge-primary"><DollarSign /></a>
        {TagsIcon.map((data: TagsWithIcontypes, index: number) => (<a key={index} href="#javascript" className={data.class}>{data.Tittle}</a>))}
      </CardBody>
    </Card>
  );
};

export default TagsWithIcon;
