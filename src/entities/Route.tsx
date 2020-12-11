import RouteStep from "./RouteStep";
import GeoLocation from "./GeoLocation";

class Route {
    public name: string|null = null;
    public distance: number = 0;
    public duration: number = 0;
    public steps: Array<RouteStep> = new Array<RouteStep>();
    public coordinates: Array<GeoLocation> = new Array<GeoLocation>();
}

export default Route;
