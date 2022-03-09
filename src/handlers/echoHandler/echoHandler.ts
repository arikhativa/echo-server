

class echoHandler {
    static handler (req: any, res: any) {
        res.send('Hello World!')

        // return req.body;
    }
}

export default echoHandler