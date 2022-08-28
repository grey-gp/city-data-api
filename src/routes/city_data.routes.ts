import express from "express";

const cityRouter = express.Router();

import { getCityByName, getCitiesHandler } from '../controllers/city_data.controller';

cityRouter.get('/', getCitiesHandler);
cityRouter.get('/:name', getCityByName);

export default cityRouter;
