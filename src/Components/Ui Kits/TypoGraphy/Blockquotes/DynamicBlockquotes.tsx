import { Fragment } from "react";
import { Blockquotesdatas } from "../../../../Data/Components/UiKits/Typography/Blockquote";
import { P } from "../../../../AbstractElements";

const DynamicBlockquotes = () => {
  return (
    <Fragment>
      {Blockquotesdatas.map((data, index) => (
        <Fragment key={index}>
          <P className="sub-title">{data.tittle}</P>
          <blockquote className={`blockquote ${data.class}`}>
            <P className="mb-0">{data.text}</P>
            <footer className="blockquote-footer">
              {data.footer}
              <cite title="Source Title">{data.lastFooter}</cite>
            </footer>
          </blockquote>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default DynamicBlockquotes;
