const express = require("express");
const bodyParser = require("body-parser")
const customerRoutes = require("./routes/customer");
const rumahRoutes = require("./routes/rumah");

const app = express();

app.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(fileUpload());
app.use(express.static('public'));


app.use("/api/customer", customerRoutes);
app.use("/api/rumah", rumahRoutes);

app.listen(3000);