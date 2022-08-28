import cityData from "../models/city-data.model";
import { Request, Response } from 'express';

import { CityData } from '../models/city-data.model';

export function getAllCitiesByCountry(req: Request, res: Response) {
    return res.status(200).json(filterCountriesByName(req.params.name, cityData));
};

export function filterCountriesByName(name: string, data: CityData[]) {
    return data.filter(elem => {
	return elem.country.toLowerCase() == name.toLowerCase();
    });
};
