
import { Request, Response } from "express";
import IHandler from "../../interface/baseHandler";

const EchoHandler: IHandler = {
    getPath: "/*",

    getHandler: (req: Request, res: Response): void => {
        console.log("asd")
        res.send(req.body + "\n")
    }
}

export default EchoHandler