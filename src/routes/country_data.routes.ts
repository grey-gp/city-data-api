import express from 'express';
import { getAllCitiesByCountry } from '../controllers/country_data.controller';

const countryRouter = express.Router();

countryRouter.use('/:name', getAllCitiesByCountry);

export default countryRouter;
