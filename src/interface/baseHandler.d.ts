
import type { RequestHandler } from "express";

interface IHandler {
    getPath: string;
    getHandler: RequestHandler;
}

export default IHandler;