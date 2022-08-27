import express from "express";

const cityRouter = express.Router();

import { getAllCities, getCityByName, getCitiesHandler } from '../controllers/city_data.controller';

cityRouter.use('/', getCitiesHandler);
cityRouter.use('/find/:name', getCityByName);

export default cityRouter;
