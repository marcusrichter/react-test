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
import ShiftedCardsPage from './pages/LayoutTests/ShiftedCardsPage';
import ParallaxPage from './pages/LayoutTests/ParallaxPage';
import FormularPage from './pages/Interactive/FormularPage';
import PageWidget from './pageElements/Widgets/PageWidget';

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
        <Route path="/layouts/shifted-cards" component={ShiftedCardsPage} exact />
        <Route path="/layouts/parallax" component={ParallaxPage} exact />
        <Route path="/interactive/formular" component={FormularPage} exact />
    </Switch>

    <footer className="text-muted">
      <div className="container pt-4 pb-4">
        <div className="row centered-vertical">
          <div className="col-12 col-md-3 col-lg-2">
            <h4>Kontakt</h4>
          </div>

          <div className="col-12 col-md-9 col-lg-3 phone-contact">
            <p>0 221 / 500888</p>
            <p><a href="mailto:post@xy.de">post@xy.de</a></p>
          </div>

          <div className="col-12 col-lg-7 meta-nav">
            <ul>
              <li><a href="#">Impressum</a></li>
              <li><a href="#">Haftungsausschluss</a></li>
              <li><a href="#">Datenschutz</a></li>
              <li><a href="#">Blog</a></li>
              <li>&copy; Lorem Ipsum</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <PageWidget></PageWidget>
    </PageContext.Provider>;
}

export default App;
