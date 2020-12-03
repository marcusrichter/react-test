class Route {
    public distance: number = 0;
    public duration: number = 0;
    public steps: Array<RouteStep> = new Array<RouteStep>();
    public coordinates: Array<Geolocation> = new Array<Geolocation>();
}

export default Route;


