

import express from "express";

import IHandler from "./interface/baseHandler";

import echoHandler from "./handler/echoHandler/echoHandler";
import whoamiHandler from "./handler/whoamiHandler/whoamiHandler";
 
const app: express.Application = express();

const handlers = initAllHandlers();

app.set("port", process.env.PORT || 8080);


// Register GET Handlers
registerAllGetHandlers(app, handlers)

function registerAllGetHandlers(app: express.Application, handlers: IHandler[]) {
    handlers.forEach((elem) => {
        if (shouldRegisterGet(elem)) {
            console.log("app.ts: register get handler: ", elem.getPath, "handler: ", elem.getHandler)

            app.get(elem.getPath, elem.getHandler)
        }
    });
}

function shouldRegisterGet(handler: IHandler) {
    return (handler.getPath && handler.getPath.length > 0 );
}

function initAllHandlers(): IHandler[] {
    const handlers: IHandler[] = []

    handlers.push(new echoHandler)
    handlers.push(new whoamiHandler)

    return handlers
}

app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
})

