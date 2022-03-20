

import initAllHandlers from "./initializer";
import IHandler from "./interface/baseHandler";
import Server from "./server";

const allHandlers: IHandler[] = initAllHandlers()

const s = new Server(allHandlers)

s.run()
