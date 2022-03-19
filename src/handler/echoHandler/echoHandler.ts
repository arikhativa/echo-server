
import { Request, Response } from "express";
import IHandler from "../../interface/baseHandler";

export default class EchoHandler implements IHandler {
    getPath: string = "/*";

    public getHandler(req: Request, res: Response): void {
        console.log("EchoHandler\n");
        res.send(req.params[0] + "\n");
    }
}
