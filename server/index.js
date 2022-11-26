const express = require('express');
const cors = require('./configs/cors');
const connectToDB = require('./configs/database');
const webConstants = require('./web-constants');

const app = express();

app.use(cors);
app.use(express.json())

connectToDB()
.then(() => {
    app.listen(webConstants.PORT, () => console.log(`Server listening on http:localhost:${webConstants.PORT}`))
})
.catch((err) => console.log(err))