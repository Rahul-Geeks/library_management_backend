const mongoose = require("mongoose");
const shortId = require("shortid");

let schema = mongoose.Schema;

let adminSchema = new schema({
    type: {
        type: String,
        default: "admin"
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    joinDate: {
        type: Date,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    },
    id:{
        type: String,
        default: shortId.generate
    }
});

module.exports = mongoose.model("Admin", adminSchema, "admin");