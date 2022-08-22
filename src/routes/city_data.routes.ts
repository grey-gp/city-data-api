import express from "express";

const cityRouter = express.Router();

import { getAllCities, getCityByName, filterByLatitude } from '../controllers/city_data.controller';

cityRouter.use('/all-cities', getAllCities);
cityRouter.use('/find/:name', getCityByName);
cityRouter.use('/filter/:name/:range', filterByLatitude);

export default cityRouter;
