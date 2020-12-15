import axios from 'axios';
import Api from "../../constants/Api";
import GeoLocation from "../../entities/GeoLocation";


class GeocodeService {
    public async geoCode(location: string): Promise<GeoLocation|null> {
        const url = `https://us1.locationiq.com/v1/search.php?key=${Api.LOCATION_IQ_ACCESS_TOKEN}&q=${location}&format=json`;

        const result = await axios.get(url);
        if (result.data?.length) {
            return new GeoLocation(result.data[0].lon, result.data[0].lat);
        }

        return null;
    }
}

export default new GeocodeService();

