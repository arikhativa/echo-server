

import express from "express";

import IHandler from "./interface/baseHandler";

import e from "./handler/echoHandler/echoHandler";
// import whoamiHandler from "./handler/whoamiHandler/whoamiHandler";
 
const app: express.Application = express();

// const handlers = initAllHandlers();

app.set("port", process.env.PORT || 8080);

// Register GET Handlers

app.get(e.getPath, e.getHandler)


// registerAllGetHandlers(app, handlers)
// handlers.forEach((elem) => {
//     if (shouldRegisterGet(elem)) {
//         app.get(elem.getPath, elem.getGetHandler())
        // app.get(elem.getPath, () => {
        //     console.log("yes")
        // })
    // }
// });
// function registerAllGetHandlers(app: express.Application, handlers: IHandler[]): express.Application {
  

//     return app
// }

function shouldRegisterGet(handler: IHandler) {
    return (handler.getPath && handler.getPath.length > 0 );
}

// function initAllHandlers(): IHandler[] {
//     const handlers: IHandler[] = []

//     handlers.push(new echoHandler)
//     handlers.push(new whoamiHandler)

//     return handlers
// }

app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
console.log(e.getHandler(null, null, null))

})

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

await delay(1000);