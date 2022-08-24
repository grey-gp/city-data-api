import cityData from "../models/city-data.model";
import { Request, Response } from 'express';

export function getAllCities(req: Request, res: Response) {
    return res.status(200).json(cityData);
};

export function getCityByName(req: Request, res: Response) {
    return res.status(200).json(cityData.find((elem) => { 
	return elem.city.toLowerCase() == req.params.name.toLowerCase() 
    }));
};

export function filterByLatitude(req: Request, res: Response) {
    const referenceCity = cityData.find(elem => elem.city.toLowerCase()== req.params.name.toLowerCase());
    return res.status(200).json(cityData.filter((elem) => {
	if (referenceCity) {
	    if (elem.city.toLowerCase() != referenceCity.city.toLowerCase())
		return absDifference(elem.lat, referenceCity.lat)<= Number(req.params.range);
	} else {
	    return [];
	}
    }));
};

function absDifference(x: number, y: number): number {
    return Math.abs(Math.abs(x) - Math.abs(y));
};
