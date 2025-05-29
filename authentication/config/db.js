const mongoose = require("mongoose")

require("dotenv").config()

const dbconnection = async () => {
    try {
        await mongoose.connect(process.env.mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Successfully connected to MongoDB");
        return true;
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        throw error;
    }
};

module.exports = dbconnection;