import React, { useState } from 'react';
import { Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';

const CommonPopover = ({ item }:any) => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);
  return (
    <>
      <Btn  color={item.btnColor} className='example-popover' id= {`${'Popover-' + item.id}`} >{item.btntext}</Btn>
      <Popover
        placement={item.placement}
        isOpen={popover}
        target={'Popover-' + item.id}
        toggle={Toggle}
        trigger={item.trigger}

      >
        <PopoverHeader>{item.Popoverheader}</PopoverHeader>
        <PopoverBody>
          {item.Popoverbody}
        </PopoverBody>
      </Popover>
    </>
  );
};

export default CommonPopover;