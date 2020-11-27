import React, {useState, useRef, useEffect} from "react";
import GreyContainer from "../../pageElements/Containers/GreyContainer";
import WhiteContainerSmall from "../../pageElements/Containers/WhiteContainerSmall";
import Map from '../../pageElements/Geo/Map';
import JumboTeaser from "../../pageElements/Containers/JumboTeaser";

export default () => {

    return <>
        <JumboTeaser backgroundImage="//picsum.photos/id/213/1000/800">
            <div className="col">
                <div className="row">
                    <div className="col-md-8 offset-md-2 text-left pt-5 mt-5">
                        <div className="row row-mt-15em">
                            <div className="col-md-7 mt-text animate-box fadeInUp animated-fast pr-5 pt-5" data-animate-effect="fadeInUp">
                                <h1>Jetzt den kürzesten Weg finden oder eine Tour planen!</h1>
                            </div>
                            <div className="col-md-4 col-md-push-1 animate-box fadeInRight animated-fast"
                                 data-animate-effect="fadeInRight">
                                <div className="search-box">
                                    <div className="tab">

                                        <div className="tab-content">
                                            <div className="tab-content-inner active" data-content="signup">
                                                <h3>Start und Ziel</h3>
                                                <form name="route" method="post">
                                                    <div className="row form-group">
                                                        <div className="col-md-12">
                                                            <label htmlFor="route_fromStreet" className="required">Start Strasse</label>
                                                            <input type="text" id="route_fromStreet" name="route[fromStreet]" required className="form-control"/>
                                                        </div>
                                                    </div>
                                                    <div className="row form-group">
                                                        <div className="col-md-12">
                                                            <label htmlFor="route_fromCity" className="required">Start Stadt</label>
                                                            <input type="text" id="route_fromCity" name="route[fromCity]" required className="form-control"/>
                                                        </div>
                                                    </div>
                                                    <div className="row form-group">
                                                        <div className="col-md-12">
                                                            <label htmlFor="route_toStreet" className="required">Ziel Strasse</label>
                                                            <input type="text" id="route_toStreet" name="route[toStreet]" required className="form-control"/>
                                                        </div>
                                                    </div>
                                                    <div className="row form-group">
                                                        <div className="col-md-12">
                                                            <label htmlFor="route_toCity" className="required">Ziel Stadt</label>
                                                            <input type="text" id="route_toCity" name="route[toCity]" required className="form-control"/>
                                                        </div>
                                                    </div>
                                                    <div className="row form-group">
                                                        <div className="col-md-12">
                                                            <label htmlFor="route_goingBy" className="required">Unterwegs mit</label>
                                                            <select id="route_goingby" name="route[goingBy]" className="form-control">
                                                                <option value="driving-car">Auto</option>
                                                                <option value="driving-hgv">LKW</option>
                                                                <option value="cycling-regular">Fahrrad</option>
                                                                <option value="cycling-road">Fahrrad (nur Strasse)</option>
                                                                <option value="cycling-safe">Fahrrad (sicher)</option>
                                                                <option value="cycling-mountain">Mountain Bike</option>
                                                                <option value="foot-walking">Zu Fuss</option>
                                                                <option value="foot-hiking">Wandern</option>
                                                                <option value="wheelchair">Rollstuhl</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="row form-group">
                                                        <div className="col-md-12">
                                                            <button className="btn btn-grey-filled btn-block">Route Finden</button>

                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </JumboTeaser>
        <WhiteContainerSmall>
            <div className="row">
                <Map/>
            </div>
        </WhiteContainerSmall>
    </>
};
