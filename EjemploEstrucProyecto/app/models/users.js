const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    emain: {
        type: String,
    },

},{
    timestamps: true,
    versionKey: false,
})

module.exports = mongoose.model("users",UserSchema)