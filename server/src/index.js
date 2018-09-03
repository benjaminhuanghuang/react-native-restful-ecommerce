import express from 'express';

import middlewaresConfig from './config/middlewares';
import './config/db';

import { CustomerRoutes } from './modules';

const PORT = process.env.PORT || 8964;

const app = express();
middlewaresConfig(app);

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.use('/api/v1/customers', CustomerRoutes);

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
