
import { Request, Response } from "express";
import IHandler from "../../interface/baseHandler";

export default class EchoHandler implements IHandler {
    constructor() {}

    getPath: string = "/*";

    public getHandler(req: Request, res: Response): void {
        res.send(req.body + "\n")
    }
}
