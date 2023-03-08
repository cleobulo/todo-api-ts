/**
 * Server
 */

import express from 'express';
import cors from 'cors';
import routes from './shared/http/routes';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})
