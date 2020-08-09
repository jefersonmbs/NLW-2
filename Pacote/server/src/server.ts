import express from 'express';
// @ts-ignore
import routes from './routes.ts';
const app = express();
app.use(express.json());
app.use(routes)
app.listen(3333,() => {
    console.info('Server listening on port 3333');
});


