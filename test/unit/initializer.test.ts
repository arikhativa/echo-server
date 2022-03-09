
import initAllHandlers from "../../src/initializer";

describe("initializer.ts", () => {
    it("Should recive the correct number of handlers", () => {
        // Setup
        const numOfHandlers = 2;

        // Test
        const l = initAllHandlers();

        // Check
        expect(l.length).toBe(numOfHandlers);
    });
});