const express = require("express");
const app = express();
app.use(express.json());
const dbconnection = require("./config/db");
const router = require("./routes/users");
require("dotenv").config();
const port = process.env.Port||2025;

// Database connection
const startServer = async () => {
    try {
        await dbconnection();
        
        // Routes
        app.use("/api/users", router);

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();
