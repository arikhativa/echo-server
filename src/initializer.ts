
import EchoHandler from "./handler/echoHandler/echoHandler";
import WhoamiHandler from "./handler/whoamiHandler/whoamiHandler";
import IHandler from "./interface/baseHandler";

function initAllHandlers(): IHandler[] {
    const handlers: IHandler[] = []

    handlers.push(new WhoamiHandler())
    handlers.push(new EchoHandler())

    return handlers
}

export default initAllHandlers