import http from 'http';
import express from 'express';

import cityRouter from './routes/city_data.routes';
import countryRouter from './routes/country_data.routes';

const router = express();

router.use(express.json());
router.get('/', (req, res) => {
    res.status(200).send('hello, world');
});

router.use('/cities', cityRouter);
router.use('/country', countryRouter);

const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 3000;

httpServer.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});
