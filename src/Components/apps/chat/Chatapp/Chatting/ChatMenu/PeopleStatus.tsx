import { Input } from "reactstrap";
import {Active,CallParagraph,CallParagraph2,} from "../../../../../../Constant";
import { P } from "../../../../../../AbstractElements";

const PeopleStatus = () => {
  return (
    <>
      <div className="people-list">
        <div className="search">
          <form className="theme-form">
            <div className="mb-3">
              <Input type="text" placeholder="Write Status..." /><i className="fa fa-pencil" />
            </div>
          </form>
        </div>
      </div>
      <div className="status">
        <P className="font-dark">{Active}</P>
        <hr />
        <P>
          {CallParagraph} &nbsp; <i className="icofont icofont-emo-heart-eyes font-danger f-20" /> <i className="icofont icofont-emo-heart-eyes font-danger f-20 m-l-5" />
        </P>
        <hr />
        <P>{CallParagraph2} &nbsp;<i className="icofont icofont-emo-rolling-eyes font-success f-20" /></P>
      </div>
    </>
  );
};

export default PeopleStatus;
