
import { request, Request, Response } from "express";
import IHandler from "baseHandler";
import echoHandler from "../../src/handler/echoHandler/echoHandler";

describe("echoHandler.ts", () => {
    let handler: IHandler;

    beforeEach(() => {
        handler = new echoHandler();
    });

    it("Should have a path", () => {
        // Setup
        // Test
        const path = handler.getPath;

        // Check
        expect(path.length).toBeGreaterThan(1);
    });

    it("Should send same path", () => {
        // Setup
        const path = "testpath";

        // tslint:disable-next-line
        const req: any = {
            params: [path]
        };

        // tslint:disable-next-line
        const res: any = {
            send: jest.fn()
        };

        // Test
        handler.getHandler(req, res, null);

        // Check
        expect(res.send).toBeCalledTimes(1);
        expect(res.send).toBeCalledWith(path + "\n");
    });

    afterEach(() => {
        handler = null;
    });
});