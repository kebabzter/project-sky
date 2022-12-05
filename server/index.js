const express = require("express");
const app = express();

// const cors = require("./middlewares/cors");
// const dataController = require("./controllers/dataController");
// const authController = require("./controllers/authController");
// const trimBody = require("./middlewares/trimBody");
// const session = require("./middlewares/session");
const { authMiddleware } = require("./middlewares/auth");
const cors = require('cors')
const router = require("./routes");
const initDatabase = require("./configs/database");
const webConstants = require('./web-constants')


app.use(cors({credentials: true, origin: 'http://localhost:4200', allowHeaders: ['Content-Type, X-Authorization']}))
app.use(express.json());
app.use(authMiddleware);
app.use(router)
initDatabase()
.then(() => {
    app.listen(webConstants.PORT, () => console.log(`Server listening on http://localhost:${webConstants.PORT}`))
})
.catch((err) => console.log(err));


// const connectionString = "mongodb://localhost:27017/project-sky";


// async function start() {
//     mongoose.connect(connectionString);
//     console.log('Database connected');
    
//     const app = express();
    
//     app.use(express.json());
//     app.use(cors());
//     app.use(trimBody());
//     app.use(session());

//     app.get('/', (req, res) => {
//         res.json({ message: "REST Service operational" });
//     });
    
//     app.use('/users', authController);
    
//     app.listen(3030, () => console.log("REST service started"));
// }

// start();