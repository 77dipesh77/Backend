const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes"); 

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Auth Routes
app.use("/api/auth", authRoutes); 

// Test route
app.get("/", (req, res) => {
  res.send("LetsAuction Backend is running ");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Export the app for testing purposes
