import React, {useContext} from 'react';
import {Page} from "../../App";

const Backdrop = ({flag}) => {
  const {close} = useContext(Page);

  return <div className='backdrop' onClick={() => close(flag)} />;
};

export default Backdrop;
