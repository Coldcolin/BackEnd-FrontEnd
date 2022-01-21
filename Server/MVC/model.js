const mongoose = require("mongoose")
const userSchema = mongoose.Schema(
    { 
        email: {
            type: String,
            unique: true
        },
        password: String
    },
    { timestamps: true}
)

module.exports = mongoose.model("userModel", userSchema)