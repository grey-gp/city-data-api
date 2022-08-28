import express from "express";

const cityRouter = express.Router();

import { getCityByName, getCitiesHandler } from '../controllers/city_data.controller';

cityRouter.use('/', getCitiesHandler);
cityRouter.use('/:name', getCityByName);

export default cityRouter;
