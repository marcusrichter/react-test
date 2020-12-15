import RouteStep from "./RouteStep";
import GeoLocation from "./GeoLocation";

class Route {
    public name: string|null = null;
    public distance: number = 0;
    public duration: number = 0;
    public steps: Array<RouteStep> = new Array<RouteStep>();
    public coordinates: Array<GeoLocation> = new Array<GeoLocation>();

    public getBorderCoordinates(): Array<GeoLocation>
    {
        const firstCoordinate = this.coordinates[0];

        const minBorderCoordinate = new GeoLocation(firstCoordinate.lon, firstCoordinate.lat);
        const maxBorderCoordinate = new GeoLocation(firstCoordinate.lon, firstCoordinate.lat);

        this.coordinates.forEach(coordinate => {
            if (coordinate.lat < minBorderCoordinate.lat) {
                minBorderCoordinate.lat = coordinate.lat;
            }
            if (coordinate.lon < minBorderCoordinate.lon) {
                minBorderCoordinate.lon = coordinate.lon;
            }
            if (coordinate.lat > maxBorderCoordinate.lat) {
                maxBorderCoordinate.lat = coordinate.lat;
            }
            if (coordinate.lon > maxBorderCoordinate.lon) {
                maxBorderCoordinate.lon = coordinate.lon;
            }
        });

        return [minBorderCoordinate, maxBorderCoordinate];
    }
}

export default Route;
