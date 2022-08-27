import express from "express";

const cityRouter = express.Router();

import { getAllCities, getCityByName, filterByLatitude, getCitiesHandler } from '../controllers/city_data.controller';

cityRouter.use('/', getCitiesHandler);
cityRouter.use('/find/:name', getCityByName);
cityRouter.use('/filter/:name/:range', filterByLatitude);

export default cityRouter;
