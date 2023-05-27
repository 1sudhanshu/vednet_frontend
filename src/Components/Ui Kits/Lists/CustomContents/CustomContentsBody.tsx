import { H5, LI, P, UL } from "../../../../AbstractElements";
import { CustomContentsBodydatas } from "../../../../Data/Components/UiKits/Lists/CustomContentsBody";

const CustomContentsBody = () => {
  return (
    <UL className='simple-list'>
      {CustomContentsBodydatas.map((data, index) => (
        <LI key={index} className={data.LiClass}>
          <div className="d-flex w-100 justify-content-between">
            <H5 className="mb-1">{data.Heading}</H5>
            <small className={data?.SmallCLass}>{"3 days ago"}</small>
          </div>
          <P className="mb-0 mt-1">{data.paragraphText}</P>
          <small className={data?.SmallCLass}>
            {"Donec id elit non mi porta."}
          </small>
        </LI>
      ))}
    </UL>
  );
};

export default CustomContentsBody;
