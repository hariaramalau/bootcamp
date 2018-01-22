const express = require("express");
const Customer = require("../models/customer");
const router = express.Router();

module.exports = function () {

    router.get("/:id", (req, res) => {

        Customer.findById(req.params.id, (error, result) => {
            if (error) {
                res.status(500).json(error);
            }
            else {
                res.json(result)
            }
        });

    });

    router.get("/", (req, res) => {

        Customer.find({}, (error, result) => {
            if (error) {
                res.status(500).json(error);
            }
            else {
                res.json(result)
            }
        });
    });

    router.post("/", (req, res) => {

        let newObj = new Customer({
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address
        });

        newObj.save((error) => {
            if (error) {
                res.status(500).send(error);
            }
            else {
                res.json(newObj);
            }
        });


    });

    router.delete("/:id", (req, res) => {

        Customer.findByIdAndRemove(req.params.id, (error, result) => {
            if (error) {
                res.status(500).json(error);
            }
            else {
                res.json({ message: "Data deleted" })
            }
        });

    });

    router.put("/", (req, res) => {

        let newObj = new Customer({
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address
        });

        Customer.findByIdAndUpdate(req.body._id, newObj, (error, result) => {
            if (error) {
                res.status(500).json(error);
            }
            else {
                res.status(500).json({ message: "Data updated" })
            }
        });

    });

    return router;
};