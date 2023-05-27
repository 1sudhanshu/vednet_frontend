import { Grid, List } from 'react-feather';
import { LI, UL } from '../../../AbstractElements';
import { useDispatch } from 'react-redux';
import { Href } from '../../../Constant';

const ViewBookmark = () => {
  const dispatch =useDispatch()
  const Gridbookmark = () => {dispatch({ type: "setGridView", payload: true });};
  const Listbookmark = () => {dispatch({ type: "setGridView", payload: false });};
  return (
      <UL  className= 'simple-list flex-row' >
        <LI><a className="grid-bookmark-view" href={Href}><Grid onClick={Gridbookmark} /></a></LI>&nbsp;
        <LI><a className="list-layout-view" href={Href}><List onClick={Listbookmark} /></a></LI>
      </UL>
  );
};
export default ViewBookmark;