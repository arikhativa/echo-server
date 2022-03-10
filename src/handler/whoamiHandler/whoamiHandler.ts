
import { Request, Response } from "express";

import IHandler from "../../interface/baseHandler";

export default class WhoamiHandler implements IHandler {
    constructor() {}

    getPath: string = "/whoami";

    public getHandler(_: Request, res: Response): void {
        console.log("whoamiHandler.ts: getHandler: ")

        res.send('Echo Server :) \n')
    }
}
