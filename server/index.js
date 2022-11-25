const express = require("express");
const mongoose = require("mongoose");

const cors = require("./middlewares/cors");
const dataController = require("./controllers/dataController");
const usersController = require("./controllers/usersController");

const connectionString = "mongodb://localhost:27017/cloudy";


async function start() {
    await mongoose.connect(connectionString);
    console.log('Database connected');
    
    const app = express();
    
    app.use(express.json());
    app.use(cors());
    
    app.get("/", (req, res) => {
        res.json({ message: "REST Service operational" });
    });
    
    app.use('/users', usersController);
    app.use('/data/catalog', dataController);
    
    app.listen(3030, () => console.log("REST service started"));
}

start();