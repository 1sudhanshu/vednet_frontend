import { LI, UL } from "../../../../../../AbstractElements";
import { Development, Href } from "../../../../../../Constant";
import { DevelopmentCategoriesDatas } from "../../../../../../Data/apps/Learning";
import { Badge } from "reactstrap";

const DevelopmentCategories = () => {
  return (
    <div className="categories pt-0">
      <div className="learning-header">
        <span className="f-w-600">{Development}</span>
      </div>
      <UL className="simple-list">
        {DevelopmentCategoriesDatas.map((data, index) => (
          <LI key={index}>
            <a href={Href}>{data.DevelopmentHeading}</a>
            <Badge color="primary" className="pull-right">{data.badgeNumber}</Badge>
          </LI>
        ))}
      </UL>
    </div>
  );
};

export default DevelopmentCategories;
