import './main.css';

import React from 'react';

import LeftDiv from './LeftDiv/LeftDiv';
import RightDiv from './RightDIv/RightDiv';



function Main() {
  return (

    <div className = "main_div">
		<div className = "main_div_con">
			<LeftDiv /> 
			<RightDiv />
      </div>
    </div>
   
  );
}

export default Main;