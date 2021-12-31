import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
var router = express.Router();

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Middle ware that is specific to this router
router.use(function timeLog(req:any, res:any, next:any) {
  console.log('Time: ', Date.now());
  next();
});


app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use(require('./api/example'));

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
