import { Card, CardBody } from "reactstrap";
import { TagsWithNumberarr } from "../../../Data/Components/TagPills";
import HeadingCommon from "../../../Common/HeadingCommon";
export interface TagsWithNumbertypes {
  class: string;
  Tittle: string;
}

const TagsWithNumber = () => {
  return (
    <Card>
      <HeadingCommon Heading="Tags With Number" />
      <CardBody className="digits badge-number ">
        <a href="#javascript" className="badge badge-primary">1</a>
        {TagsWithNumberarr.map((data: TagsWithNumbertypes, index: number) => (
            <a key={index} href="#javascript" className={data.class}>{data.Tittle}</a>
        ))}
      </CardBody>
    </Card>
  );
};

export default TagsWithNumber;
