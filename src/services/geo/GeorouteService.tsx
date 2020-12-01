import axios from 'axios';
import Api from "../../constants/Api";
import GeoLocation from "../../entities/GeoLocation";

class GeorouteService {
    public async findRoute(from: GeoLocation, to: GeoLocation): Promise<GeoLocation|null> {
        const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf624821bad012a81948b8a907738a033bf816&start=${from.lon},${from.lat}&end=${to.lon},${to.lat}`;
        const result = await axios.get(url);
        console.info(result);

        if (result.data && result.data.length > 0) {
            return result.data[0] as GeoLocation;
        }

        //if (result.data && result.data.length > 0) {

            //return result.data[0] as IGeocoding;
        //}

        return null;
    }
}

export default new GeorouteService();
