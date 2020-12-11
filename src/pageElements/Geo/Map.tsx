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

let lastRouteRenderName: string|null = null;

const renderMap = (route: Route|null) => {
    const additionalLayers = new Array<any>();

    if (route) {
        lastRouteRenderName = route.name;
        const routeLine = new LineString(route.coordinates.map(c => [c.lon, c.lat]));

        const routeLineFeature = new Feature({
            type: 'route',
            geometry: routeLine,
            /*style: this.get('style')*/
        });

        const routeLayer = new VectorLayer({
            source: new VectorSource({
                features: [routeLineFeature]
            })
        });

        additionalLayers.push(routeLayer);
    }

    return new ol.Map({
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                })
            }),
            ...additionalLayers,
        ],
        view: new View({
            center: [0, 0],
            zoom: 2
        })
    });
};

const Map = (props: any) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<ol.Map|null>(null);
    const route = props.route as Route;

    if (route && lastRouteRenderName !== route.name) {
        //mapObject = renderMap(route);

    }

    // on component mount
    useEffect(() => {
        const mapObject = renderMap(route)

        if (mapRef.current !== null) {
            mapObject.setTarget(mapRef.current);
            setMap(mapObject);
        }

        return () => {
            if (null !== mapObject) {
                mapObject.setTarget(undefined);
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