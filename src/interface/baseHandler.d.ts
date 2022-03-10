
import type { RequestHandler } from "express";

declare abstract class IHandler {
    getPath: string
    getHandler: RequestHandler
}

export default IHandler