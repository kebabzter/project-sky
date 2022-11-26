const express = require('express');
const app = express();
const cors = require('./configs/cors');

const connectToDB = require('./configs/database');
const webConstants = require('./web-constants');
const routes = require('./routes');
const { authMiddleware } = require('./middlewares/auth');


app.use(cors())
app.use(express.json());
app.use(authMiddleware)
app.use(routes)

connectToDB()
.then(() => {
    app.listen(webConstants.PORT, () => console.log(`Server listening on http:localhost:${webConstants.PORT}`))
})
.catch((err) => console.log(err))