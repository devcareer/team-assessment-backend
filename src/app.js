const express = require("express");
const userRoute = require("./routers/userRoute");

const app = express();

app.use(express());

app.use('/api/v1/users', userRoute);

app.all('*', (req, res) => {
    res.status(404).send(`The route ${req.originalUrl} does not exist!`);
});

module.exports = app;
