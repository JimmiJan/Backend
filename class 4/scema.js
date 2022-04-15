const mongoose = require("mongoose")

const userSchm = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
})

const userModal = mongoose.model("user",userSchm)

module.exports = userModal