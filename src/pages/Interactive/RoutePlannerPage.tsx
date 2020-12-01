import React, {useState, useRef, useEffect} from "react";
import WhiteContainerSmall from "../../pageElements/Containers/WhiteContainerSmall";
import Map from '../../pageElements/Geo/Map';
import JumboTeaser from "../../pageElements/Containers/JumboTeaser";
import {useForm} from "react-hook-form";
import {Element, scroller} from "react-scroll";
import {TextField} from "@material-ui/core";
import Button from "../../pageElements/Buttons/Button";
import IFormRoutePlanner from "../../entities/IFormRoutePlanner";
import geocodeService from "../../services/geo/GeocodeService";
import georouteService from "../../services/geo/GeorouteService";
import GeoLocation from "../../entities/IGeocoding";

export default () => {
    const { register, handleSubmit, errors, control } = useForm();

    const onSubmit = async(data: any) => {
        const dataRoutePlanner = data as IFormRoutePlanner;

        const geocodeFrom = await geocodeService.geoCode(`${dataRoutePlanner.fromStreet} ${dataRoutePlanner.fromCity}`);
        const geocodeTo = await geocodeService.geoCode(`${dataRoutePlanner.toStreet} ${dataRoutePlanner.toCity}`);

        georouteService.findRoute(geocodeFrom as GeoLocation, geocodeTo as GeoLocation);

        console.info(geocodeFrom);

        scroller.scrollTo('mapScrollToElement', {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: 50,
        });
    };

    return <>
        <JumboTeaser backgroundImage="//picsum.photos/id/1067/1000/800">
            <div className="col">
                <div className="row">
                    <div className="col-md-8 offset-md-2 text-left pt-5 mt-5">
                        <div className="row row-mt-15em">
                            <div className="col-md-7 mt-text pr-5 pt-5" data-aos="fade-down">
                                <h1>Jetzt den kürzesten Weg finden oder eine Tour planen!</h1>
                            </div>
                            <div className="col-md-4 col-md-push-1" data-aos="fade-left">
                                <div className="search-box">
                                    <div className="tab">
                                        <div className="tab-content">
                                            <div className="tab-content-inner active" data-content="signup">
                                                <h3>Start und Ziel</h3>
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <div className="row form-group">
                                                        <div className="col-md-12">
                                                            <label htmlFor="route_fromStreet" className="required">Start Strasse</label>
                                                            <input type="text" name="fromStreet" required className="form-control" data-validators="isRequired,isAlpha" ref={register}/>
                                                        </div>
                                                    </div>
                                                    <div className="row form-group">
                                                        <div className="col-md-12">
                                                            <label htmlFor="route_fromCity" className="required">Start Stadt</label>
                                                            <input type="text" name="fromCity" required className="form-control" data-validators="isRequired,isAlpha" ref={register}/>
                                                        </div>
                                                    </div>
                                                    <div className="row form-group">
                                                        <div className="col-md-12">
                                                            <label htmlFor="route_toStreet" className="required">Ziel Strasse</label>
                                                            <input type="text" name="toStreet" required className="form-control" data-validators="isRequired,isAlpha" ref={register}/>
                                                        </div>
                                                    </div>
                                                    <div className="row form-group">
                                                        <div className="col-md-12">
                                                            <label htmlFor="route_toCity" className="required">Ziel Stadt</label>
                                                            <input type="text" name="toCity" required className="form-control" data-validators="isRequired,isAlpha" ref={register}/>
                                                        </div>
                                                    </div>
                                                    <div className="row form-group">
                                                        <div className="col-md-12">
                                                            <label htmlFor="route_goingBy" className="required">Unterwegs mit</label>
                                                            <select name="goingBy" className="form-control" data-validators="isRequired,isAlpha" ref={register}>
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
                                                            <button className="btn btn-grey-filled btn-block mt-3">Route Finden</button>
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
            <Element name="mapScrollToElement"></Element>
            <div className="row">
                <Map/>
            </div>
        </WhiteContainerSmall>
    </>
};
