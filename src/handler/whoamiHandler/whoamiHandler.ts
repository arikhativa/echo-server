
import { Request, Response } from "express";

import IHandler from "../../interface/baseHandler";

export default class WhoamiHandler implements IHandler {
    getPath: string = "/whoami";

    public getHandler(_: Request, res: Response): void {
        res.send("Echo Server :) \n");
    }
}
