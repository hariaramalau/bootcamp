const express = require("express");
const Rumah = require("../models/rumah");
const router = express.Router();

module.exports = function () {

    router.get("/:id", (req, res) => {

        Rumah.findById(req.params.id, (error, result) => {
            if (error) {
                res.status(500).json(error);
            }
            else {
                res.json(result)
            }
        });

    });

    router.get("/", (req, res) => {

        Rumah.find({}, (error, result) => {
            if (error) {
                res.status(500).json(error);
            }
            else {
                res.json(result)
            }
        });
    });

    router.post("/", (req, res) => {

            let newObj = new Rumah({
                rumah_id: req.body.rumah_id,
                rumah_owner: req.body.rumah_owner,
                rumah_harga : req.body.rumah_harga
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

        Rumah.findByIdAndRemove(req.params.id, (error, result) => {
            if (error) {
                res.status(500).json(error);
            }
            else {
                res.json({ message: "Data deleted" })
            }
        });

    });

    router.put("/", (req, res) => {

        let newObj = new Rumah({
            rumah_id: req.body.rumah_id,
            rumah_owner: req.body.rumah_owner,
            rumah_harga : req.body.rumah_harga
        });

        Rumah.findByIdAndUpdate(req.body._id, newObj, (error, result) => {
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