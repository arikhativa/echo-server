
import express, {Request, Response} from "express";

const app: express.Application = express();

const path: string = "/*";

app.set("port", process.env.PORT || 8080);
app.get(path, handler);

app.listen(app.get("port"), () => {
    console.log("App is running at http://localhost:%d in %s mode", app.get("port"), app.get("env"));
    }
);

function handler(req: Request, res: Response): void {
    console.log("EchoHandler\n");
    res.send(req.params[0] + "\n");
}