const express = require("express");
const app = express();
const mongoose = require("mongoose")

// routes
const foodtruckRoutes = require('./routes/foodtruck')

const port = process.env.PORT || 4567;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/rest-api-foodtruckdb", {useNewUrlParser:true, useUnifiedTopology:true})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/foodtruck", foodtruckRoutes)

app.listen(port, () => console.log(`[🚧 server is running on ${port}]`));
