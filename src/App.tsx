import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss';
import Header from './pageElements/Header';
import SideNav from './pageElements/SideNav';
import PageContext from "./contexts/PageContext";
import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import LayoutTestOne from './pages/LayoutTests/LayoutTestOne';

function App() {
  const [sideMenuActivated, setSideMenuActivated] = useState<boolean>(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return <PageContext.Provider value={{sideMenuActivated, setSideMenuActivated}}> 
    <Header></Header>
    <SideNav></SideNav>
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/layouts/layout1" component={LayoutTestOne} exact />
    </Switch>

    <footer className="text-muted">
      <div className="container">
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
        <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
      </div>
    </footer>
    </PageContext.Provider>;
}

export default App;
