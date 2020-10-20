import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PageContext from "./../contexts/PageContext";

export default () => {
    const {sideMenuActivated, setSideMenuActivated} = React.useContext(PageContext);
    
    return <div 
      id="mySidenav" 
      className={clsx('sidenav', sideMenuActivated && 'sidenav-active')}
      >
        <div></div>
        <div>
            <a 
            href="javascript:void(0)" 
            className="closebtn"
            onClick={() => setSideMenuActivated !== undefined && setSideMenuActivated(false)} 
            >&times;</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
  </div>
};
