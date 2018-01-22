const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/bootcamp22");

const Schema = mongoose.Schema;

const rumahSchema = new Schema({

    rumah_id: String,
    rumah_owner: String

})

const Rumah = mongoose.model("rumah", rumahSchema);

module.exports = Rumah;
