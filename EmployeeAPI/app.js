const express = require("express");
const mongoose = require("mongoose");

const app = express();

const url = "mongodb://localhost/EmployeeData";

mongoose.connect(url, () => {
    console.log("db connected..")
});

app.use(express.json());

const empRoutes = require('./routes/empRoutes')
app.use('/', empRoutes)

app.listen(5000, () => {
    console.log("server connected with port 5000...");
})

