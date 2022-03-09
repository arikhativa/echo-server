
import express from "express";

import echoHandler from "./handlers/echoHandler/echoHandler";
 
const app = express()

app.set("port", process.env.PORT || 8080);
app.get('/', echoHandler.handler);

export default app;