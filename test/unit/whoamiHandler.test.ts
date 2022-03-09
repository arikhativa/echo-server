
import IHandler from "baseHandler";
import whoamiHandler from "../../src/handler/whoamiHandler/whoamiHandler";

describe("whoamiHandler.ts", () => {
    let handler: IHandler;

    beforeEach(() => {
        handler = new whoamiHandler();
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
        const path = "whoami";

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
        expect(res.send).toBeCalledWith("Echo Server :) \n");
    });

    afterEach(() => {
        handler = null;
    });
});