
import express from 'express';

import database from './helpers/database.js'
import errors from './helpers/errors.js';

// On importe les routes des modeles.
import stringRoute from './routes/stringRoutes.js'

const app = express();

database(app);

//Pour comprendre le json
app.use(express.json());

app.use('/string',stringRoute)
app.use('*', errors);

export default app;