const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;

const MONGOHOST = process.env.MONGOHOST;
const MONGOPASSWORD = process.env.MONGOPASSWORD;
const MONGOPORT = process.env.MONGOPORT;
const MONGOUSER = process.env.MONGOUSER;

//routes
app.get("/", (req, res) => {
    res.send("welcome to my API");
});

//mongoDB connection
mongoose
    .connect(`mongodb://${MONGOUSER}:${MONGOPASSWORD}@${MONGOHOST}:${MONGOPORT}`)
    .then(() => console.log("conected to railwayDB"))
    .catch((error) => console.error(error))

app.listen(port, () => console.log("server listening"));