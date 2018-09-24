const express = require('express')
const bodyParser = require ('body-parser')
const app = express() 



app.use(require("./routes/index.js"))

app.listen(3000, () => console.log("server is running"));

