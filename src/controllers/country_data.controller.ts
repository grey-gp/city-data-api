import cityData from "../models/city-data.model";
import { Request, Response } from 'express';

export function getAllCitiesByCountry(req: Request, res: Response) {
    return res.status(200).json(cityData.filter((elem) => {
	return elem.country.toLowerCase() == req.params.name.toLowerCase();
    }));
};
