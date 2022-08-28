const cityDataFile = require('./cleaned_city_data.json');

export interface CityData {
    city: string;
    lat: number;
    lng: number;
    iso: string;
    country: string;
}

let cityData: CityData[] = JSON.parse(JSON.stringify(cityDataFile));

export default cityData;
