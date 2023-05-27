import { H6, P } from '../../../AbstractElements';
import { ContactHistory, Href } from '../../../Constant';

const HistoryClass = () => {
  const closehistory = () => {
    document.querySelector('.history')?.classList.remove('show');
  };
  return (
      <div id="right-history" className="history">
        <div className="modal-header p-l-20 p-r-20">
          <H6  className= 'modal-title w-100'  >{ContactHistory}
            <span className="pull-right">
              <a className="closehistory" href={Href} onClick={closehistory}>
                <i className="icofont icofont-close"></i>
              </a>
            </span>
          </H6>
        </div>
        <div className="history-details">
          <div className="text-center"><i className="icofont icofont-ui-edit"></i>
            <P>{'Contact has not been modified yet.'}</P>
          </div>
          <div className="d-flex align-items-start">
            <i className="icofont icofont-star me-3"></i>
            <div className="flex-grow-1 mt-0">
              <H6  className= 'mt-0'  >{'Contact Created'}</H6>
              <P className= 'mb-0'  >{'Contact is created via mail'}</P><span className="f-12">{'Sep 10, 2022 4:00'}</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HistoryClass;