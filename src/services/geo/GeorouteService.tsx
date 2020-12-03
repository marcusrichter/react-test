import axios from 'axios';
import Api from "../../constants/Api";
import GeoLocation from "../../entities/GeoLocation";
import Route from "../../entities/Route";
import RouteStep from "../../entities/RouteStep";

class GeorouteService {
    public async findRoute(from: GeoLocation, to: GeoLocation): Promise<GeoLocation|null> {
        const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf624821bad012a81948b8a907738a033bf816&start=${from.lon},${from.lat}&end=${to.lon},${to.lat}`;
        const result = await axios.get(url);
        console.info(result);

        if (!result.data) {
            return null;
        }

        const route = new Route();
        route.distance = result.data.features.summary.distance;
        route.duration = result.data.features.summary.duration;
        result.data.properties.segments.steps.forEach(step => {
            const routeStep = new RouteStep();
            routeStep.distance = step.distance;
            routeStep.duration = step.duration;
            routeStep.type = step.type;
            routeStep.instruction = step.instruction;
            routeStep.name = step.name;

            route.steps.push(routeStep);
        });

        result.data.properties.geomotry.coordinates.forEach(coordinate => {
            route.steps.push(new GeoLocation(coordinate[0], coordinate[1]));
        });

        return null;
    }
}

export default new GeorouteService();
