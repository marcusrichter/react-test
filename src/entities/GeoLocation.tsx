class GeoLocation {
    public lat: number;
    public lon: number;

    constructor(lon: number, lat: number) {
        this.lat = lat;
        this.lon = lon;
    }

    toString(): string {
        return `${this.lon},${this.lat}`;
    }

    toArray(): Array<number> {
        return [this.lon, this.lat];
    }
}

export default GeoLocation;
