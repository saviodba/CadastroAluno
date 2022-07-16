require('dotenv').config();
import express from "express"
import * as bodyParser from 'body-parser';
import "reflect-metadata";


import { routerAluno } from "./routes/aluno"

export const app = express();

app.use(bodyParser.json());
app.use(express.json());

app.use('/', routerAluno);

