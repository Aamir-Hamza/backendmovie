const express = require("express");
const app = express();
app.use(express.json());
const dbconnection = require("./config/db");
const router = require("./routes/users");
require("dotenv").config();
const PORT = process.env.PORT || 2025;

// Database connection
const startServer = async () => {
    try {
        await dbconnection();
        
        // Routes
        app.use("/api/users", router);

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();
