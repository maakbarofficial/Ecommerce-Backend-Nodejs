const express = require("express");
const app = express();

const errorMiddleware = require("./middlewares/error");

app.use(express.json());

// Route Imports
const productRoutes = require("./routes/productRoute");

app.use("/api/v1", productRoutes);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
