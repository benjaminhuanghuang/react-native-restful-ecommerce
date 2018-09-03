import express from 'express';

import middlewaresConfig from './config/middlewares';
import './config/db';

const PORT = process.env.PORT || 8964;

const app = express();
middlewaresConfig(app);

app.get('/', (req, res)=>{
  res.send("Welcome");
});

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});