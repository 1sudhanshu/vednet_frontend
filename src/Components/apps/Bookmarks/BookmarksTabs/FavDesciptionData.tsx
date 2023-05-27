import { H6, LI, P, UL } from "../../../../AbstractElements";
import { Href } from "../../../../Constant";
import { Tag,Edit2, Link, Share2, Trash2 } from "react-feather";
import { bookMarkType } from "../ReducerTypes";
interface propsType {
  myBookData: bookMarkType;
  editbookmarkdata: (data: bookMarkType) => void;
  Remove_from_my_bookmark: (mybookmarkId: number) => void;
}

const FavDesciptionData = ({ myBookData, editbookmarkdata, Remove_from_my_bookmark,}: propsType) => {
  const { title, id,website_url,collection,desc } = myBookData;
  return (
    <div className="desciption-data">
      <div className="title-bookmark">
        <H6 className="title_0">{title}</H6>
        <P className="weburl_0">{website_url}</P>
        <div className="hover-block">
          <UL className="simple-list flex-row">
            <LI><a href={Href} onClick={() => editbookmarkdata(myBookData)}><Edit2 /></a></LI>
            <LI><a href={Href}><Link /></a></LI>
            <LI><a href={Href}><Share2 /></a></LI>
            <LI><a href={Href} onClick={() => Remove_from_my_bookmark(id)}><Trash2 /></a></LI>
            <LI className="pull-right text-end"><a href={Href}><Tag /></a></LI>
          </UL>
        </div>
        <div className="content-general">
          <P className="desc_3">{desc}</P>
          <span className="collection_3">{collection}</span>
        </div>
      </div>
    </div>
  );
};

export default FavDesciptionData;
