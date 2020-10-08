const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
require('./config/mongoose.config'); 
const port = 8000;
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

require('./routes/user.routes')(app);
app.listen(port, () => console.log(`Listening on port: ${port}`) );