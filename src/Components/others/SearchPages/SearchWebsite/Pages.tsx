import { LI, UL } from "../../../../AbstractElements";
import { Href, Next, Previous } from "../../../../Constant";

const PagesSort = () => {
  
  return (
    <div className="info-block m-t-30">
      <nav>
        <UL className="simple-list pagination pagination-primary d-flex flex-row">
          <LI className="page-item disabled"><a className="page-link" href={Href}>{Previous}</a></LI>
          <LI className="page-item"><a className="page-link" href={Href}>1</a></LI>
          <LI className="page-item active"><a className="page-link" href={Href}>2 <span className="sr-only">(current)</span></a></LI>
          <LI className="page-item"><a className="page-link" href={Href}>3</a></LI>
          <LI className="page-item"><a className="page-link" href={Href}>{Next}</a></LI>
        </UL>
      </nav>
    </div>
  );
};
export default PagesSort;
