const cityDataFile = require('./cleaned_city_data.json');

interface CityData {
    city: string;
    lat: number;
}

let cityData: CityData[] = JSON.parse(JSON.stringify(cityDataFile));

/*const cityData: CityData[] = [{
    name: 'new-york',
    lat: 78.22
}, {
    name: 'tokyo',
    lat: 100.22
}, {
    name: 'dallas',
    lat: 82.1
}];
*/

export default cityData;
