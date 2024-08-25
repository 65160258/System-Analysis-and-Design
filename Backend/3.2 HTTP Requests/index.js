import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h2>Hello World!!<h2>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>0957743139<h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>อาหารที่ชอบคือไก่<h1>");
});

app.listen(port, () => {
    console.log(`server running on port ${port},`);
});

