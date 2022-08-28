# city-data-api
A simple API used to fetch city latitude and longitude data.

This started as a simple project to be used in a SwiftUI project to find cities that had similar latitudes as a selected city.
It has also served as a way to learn more about building out APis using Typescript and express.

The API is currently very simple with the only endpoints being:
/cities - retrieves a list of JSON objects of all city data

/cities/:name - retrieves single JSON object of the city with matching name
/cities?name=&range= - returns a list of JSON objects of all cities that are within the range provided of the specified city
/cities?name=&range=&country= - returns a list of JSON objects of all cities within specified country that are within the range of the named city
/country/:name - returns a list of JSON objects of all city data for cities within the specified country.

Thanks for the city data goes to simplemaps. The data was downloaded from https://simplemaps.com/data/world-cities which is licensed under the Creative Commons Attribution 4.0.
