const express = require("express");
const mongoose = require("mongoose");

const cors = require("./middlewares/cors");
const dataController = require("./controllers/dataController");
const authController = require("./controllers/authController");
const trimBody = require("./middlewares/trimBody");
const session = require("./middlewares/session");

const connectionString = "mongodb://localhost:27017/project-sky";


async function start() {
    mongoose.connect(connectionString);
    console.log('Database connected');
    
    const app = express();
    
    app.use(express.json());
    app.use(cors());
    app.use(trimBody());
    app.use(session());

    app.get('/', (req, res) => {
        res.json({ message: "REST Service operational" });
    });
    
    app.use('/users', authController);
    
    app.listen(3030, () => console.log("REST service started"));
}

start();