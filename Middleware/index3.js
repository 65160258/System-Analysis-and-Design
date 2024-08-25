import express from "express";

const app = express();
const port = 3000;

function loggor(req, res, next) {
    console.log("Request: Method", req.method);
    console.log("Request: URL", req.url);
    next();
}

app.use(loggor);

app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
