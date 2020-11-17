import React, { useState, useEffect } from 'react';
import logo from './../img/logo.svg';
import clsx from 'clsx';
import HamburgerMenu from './HamburgerMenu';
import { Link } from "react-router-dom";

export default () => {
    const [headerMinimized, setHeaderMinimized] = useState(false);
    const [subMenuActivated, setSubmenuActivated] = useState<string|null>(null);

    useEffect(() => {    
      window.addEventListener('scroll', function(e) {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        setHeaderMinimized(top > 100);
      });
    });

    return <header className={clsx(headerMinimized && 'downsize', !headerMinimized && 'standard')}>
      <nav className="navbar navbar-expand" onMouseLeave={() => setSubmenuActivated(null)}>
        <a className="navbar-brand" href="#">
          <img src={logo}></img>
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-right d-none d-l-flex d-xl-flex">
            <li className="navbar-nav dropdown">
              <a href="#" className="nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"
              onMouseEnter={() => setSubmenuActivated('menu1')}        
              >Layout Tests</a>
              <ul className={clsx('dropdown-menu', subMenuActivated === 'menu1' && 'show')}>
                <li className="text-center">
                  <Link to="/layouts/shifted-cards">Shifted Cards</Link>
                </li>
                <li className="text-center">
                  <Link to="/layouts/parallax">Parallax</Link>
                </li>                
                <li className="text-center">
                  <Link to="/layouts/scrolling-background-color-page">Scrolling BG Color</Link>
                </li>     
                <li className="text-center">
                  <Link to="/layouts/timeline-page">Timeline</Link>
                </li>                    
              </ul>
            </li>
            <li className="navbar-nav dropdown">
              <a href="#" className="nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"
              onMouseEnter={() => setSubmenuActivated('menu_interactive')}        
              >Interactive</a>
              <ul className={clsx('dropdown-menu', subMenuActivated === 'menu_interactive' && 'show')}>
                <li className="text-center">
                  <Link to="/interactive/formular">Formular</Link>
                </li>
                <li className="text-center"><a href="#">justo duo dolores</a></li>
                <li className="text-center"><a href="#">takimata sanctus est</a></li>
                <li className="text-center"><a href="#">sit amet</a></li>
                <li className="text-center"><a href="#">sanctus est</a></li>
              </ul>
            </li>
            <li className="navbar-nav">
              <a href="#" className="nav-link">Users</a>
            </li>
            <li className="navbar-nav">
              <a href="#" className="nav-link">Users</a>
            </li>
          </ul>

          <span className="navbar-nav ml-auto">
            <HamburgerMenu></HamburgerMenu>
          </span>
        </div>
      </nav>
    </header>
};
