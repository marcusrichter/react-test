import React, { useRef, useState, useEffect } from "react"
import MapContext from "../../contexts/MapContext";
import * as ol from "ol";
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

const Map = ({ }) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<any>(null);

    // on component mount
    useEffect(() => {

        const mapObject = new ol.Map({
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

        mapObject.setTarget(mapRef.current);
        setMap(mapObject);

        return () => mapObject.setTarget(undefined);
    }, []);

    return (
        <MapContext.Provider value={{ map }}>
            <div ref={mapRef} className="ol-map">
            </div>
        </MapContext.Provider>
    )
}

export default Map;