

import express from "express";

import IHandler from "./interface/baseHandler";

export class Server {
    private app: express.Application;

    constructor(allHandlers: IHandler[]) {
        this.app = express();
        this.app.set("port", process.env.PORT || 8080);

        registerAllGetHandlers(this.app, allHandlers);
    }

    public run() {
        this.app.listen(this.app.get("port"), () => {
            console.log(
                "  App is running at http://localhost:%d in %s mode",
                this.app.get("port"),
                this.app.get("env")
            );
        });
    }
}


function registerAllGetHandlers(app: express.Application, handlers: IHandler[]) {
    handlers.forEach((elem) => {
        if (shouldRegisterGet(elem)) {
            console.log(elem.getPath);
            app.get(elem.getPath, elem.getHandler);
        }
    });
}


function shouldRegisterGet(handler: IHandler) {
    return (handler.getPath && handler.getPath.length > 0 );
}

export default Server;