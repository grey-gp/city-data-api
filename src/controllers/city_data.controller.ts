import cityData from "../models/city-data.model";
import { Request, Response } from 'express';

export function getAllCities(req: Request, res: Response) {
    return res.status(200).json(cityData);
};

export function getCitiesHandler(req: Request, res: Response) {
    const query = req.query;
    if (Object.keys(query).length === 0) return getAllCities(req, res);
    if (query.name && query.range) return filterByLatitude(query.name.toString(), query.range.toString(), res);

    return res.status(400).send('missing name or range from query parameters');
};

export function getCityByName(req: Request, res: Response) {
    return res.status(200).json(findCityElement(req.params.name));
};

function filterByLatitude(name: string, range: string, res: Response) {
    const referenceCity = findCityElement(name);
    return res.status(200).json(cityData.filter((elem) => {
	if (referenceCity) {
	    if (elem.city.toLowerCase() != referenceCity.city.toLowerCase())
		return absDifference(elem.lat, referenceCity.lat)<= Number(range);
	} else {
	    return [];
	}
    }));
};

function findCityElement(cityName: string) {
    return cityData.find(elem => elem.city.toLowerCase() == cityName.toLowerCase());
}

function absDifference(x: number, y: number): number {
    return Math.abs(Math.abs(x) - Math.abs(y));
};
