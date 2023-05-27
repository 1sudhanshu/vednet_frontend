import { Badge } from "reactstrap";
import { LI, UL } from "../../../../../../AbstractElements";
import { Design, Href } from "../../../../../../Constant";
import { designCategoriesData } from "../../../../../../Data/apps/Learning";

const DesignCategories = () => {
  return (
    <div className="categories">
      <div className="learning-header">
        <span className="f-w-600">{Design}</span>
      </div>
      <UL className="simple-list">
        {designCategoriesData.map((data, index) => (
          <LI key={index}>
            <a href={Href}>{data.learningHeading}</a>
            <Badge color="primary" className="pull-right">
              {data.badgeNumber}
            </Badge>
          </LI>
        ))}
      </UL>
    </div>
  );
};

export default DesignCategories;
