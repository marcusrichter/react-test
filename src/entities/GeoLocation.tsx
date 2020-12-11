class GeoLocation {
    public lat: number;
    public lon: number;

    constructor(lon: number, lat: number) {
        this.lat = lat;
        this.lon = lon;
    }

    toString() {
        return `${this.lon},${this.lat}`;
    }
}

export default GeoLocation;
