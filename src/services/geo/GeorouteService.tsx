import axios from 'axios';
import Api from "../../constants/Api";
import GeoLocation from "../../entities/GeoLocation";
import Route from "../../entities/Route";
import RouteStep from "../../entities/RouteStep";

class GeorouteService {
    public async findRoute(from: GeoLocation, to: GeoLocation): Promise<Route|null> {
        const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${Api.OPEN_ROUTE_KEY}&start=${from.lon},${from.lat}&end=${to.lon},${to.lat}`;
        const result = await axios.get(url);

        if (!result.data) {
            return null;
        }

        const route = new Route();

        route.distance = result.data.features[0].properties.summary.distance;
        route.duration = result.data.features[0].properties.summary.duration;
        result.data.features[0].properties.segments[0].steps.forEach(step => {
            const routeStep = new RouteStep();
            routeStep.distance = step.distance;
            routeStep.duration = step.duration;
            routeStep.type = step.type;
            routeStep.instruction = step.instruction;
            routeStep.name = step.name;

            route.steps.push(routeStep);
        });

        result.data.features[0].geometry.coordinates.forEach(coordinate => {
            route.coordinates.push(new GeoLocation(coordinate[0], coordinate[1]));
        });

        route.name = Date.now().toString();

        return route;
    }
}

export default new GeorouteService();
