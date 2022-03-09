
import express from "express";

import echoHandler from "./handlers/echoHandler/echoHandler";
 
const app = express()

app.get('/', echoHandler.handler);

export default app;