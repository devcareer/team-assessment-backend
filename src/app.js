const express = require("express");

const app = express();

app.use(express());

app.all('*', (req, res) => {
    res.status(404).send(`The route ${req.originalUrl} does not exist!`);
});

module.exports = app;
