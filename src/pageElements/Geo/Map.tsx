import React, { useRef, useState, useEffect } from "react"
import MapContext from "../../contexts/MapContext";
import * as ol from "ol";
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import Route from "../../entities/Route";
import { LineString } from "ol/geom";
import { Feature } from "ol";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Stroke, Style } from "ol/style";
import { boundingExtent } from "ol/extent";
import { transformExtent } from "ol/proj";

let lastRouteRenderName: string|null = null;

const adjustMapToRoute = (route: Route, map: ol.Map) => {
    const borderCoordinates = route.getBorderCoordinates();

    let ext = boundingExtent([borderCoordinates[0].toArray(), borderCoordinates[1].toArray()]);

    ext = transformExtent(ext, "EPSG:4326", "EPSG:3857");

    map.getView().fit(ext);
};

const renderMap = (route: Route|null): ol.Map => {
    const map = new ol.Map({
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                })
            })
        ],
        view: new View({
            center: [0, 0],
            zoom: 2
        })
    });

    if (route) {
        lastRouteRenderName = route.name;
        const routeLine = new LineString(route.coordinates.map(c => [c.lon, c.lat]));
        routeLine.transform('EPSG:4326', 'EPSG:3857');


        const routeLineFeature = new Feature({
            name: 'Line',
            geometry: routeLine,
        });

        routeLineFeature.setStyle(new Style(
            {stroke: new Stroke({color: '#00d1b2', width: 5})}
            ));

        const routeLayer = new VectorLayer({
            source: new VectorSource({
                features: [routeLineFeature]
            })
        });

        map.addLayer(routeLayer);
        adjustMapToRoute(route, map);
    }

    return map;
};

const Map = (props: any) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<ol.Map|null>(null);
    const route = props.route as Route;

    if (route && lastRouteRenderName !== route.name) {
        const mapObject = renderMap(route);
        if (mapRef.current !== null) {
            mapObject.setTarget(mapRef.current);
            setMap(mapObject);
        }
    }

    useEffect(() => {
        /*const mapObject = renderMap(route)

        if (mapRef.current !== null) {
            mapObject.setTarget(mapRef.current);
            setMap(mapObject);
        }*/

        return () => {
            if (null !== map) {
                map.setTarget(undefined);
            }
        }
    }, []);

    return (
        <MapContext.Provider value={{ map }}>
            <div ref={mapRef} className="ol-map">
            </div>
        </MapContext.Provider>
    )
}

export default Map;