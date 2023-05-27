import { H6, LI, P, UL } from "../../../../AbstractElements";
import { Href } from "../../../../Constant";
import { Tag,Edit2, Link, Share2, Trash2 } from "react-feather";
import { bookMarkType } from "../ReducerTypes";

interface propsType {
  data: bookMarkType;
  OnHandleClick: (book: bookMarkType) => void;
  Removefrombookmark: (bookmarkId: number, fillstar: boolean) => void;
}
const DesciptionData = ({ data, OnHandleClick, Removefrombookmark,}: propsType) => {
  const { title, website_url, fillstar, id } = data;
  return (
    <div className="desciption-data">
      <div className="title-bookmark">
        <H6 className="title_0">{title} </H6>
        <P className="weburl_0">{website_url}</P>
        <div className="hover-block">
          <UL className="simple-list flex-row">
            <LI><a href={Href} onClick={() => OnHandleClick(data)}><Edit2 /></a></LI>
            <LI><a href={Href}><Link /></a></LI>
            <LI><a href={Href}><Share2 /></a></LI>
            <LI><a href={Href} onClick={() => Removefrombookmark(id, fillstar)}><Trash2 /></a></LI>
            <LI className="pull-right text-end"><a href={Href}><Tag /></a></LI>
          </UL>
        </div>
        <div className="content-general">
          <P className="desc_3">{data.desc}</P>
          <span className="collection_3">{data.collection}</span>
        </div>
      </div>
    </div>
  );
};

export default DesciptionData;
