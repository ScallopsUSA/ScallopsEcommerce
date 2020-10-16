const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();
require('./routes/user.routes')(app);
require('./config/mongoose.config'); 

// [ SERVER SETUP ]
const port = process.env.PORT || 8000;
app.use(cookieParser());
app.use(cors( {credentials: true, origin: 'http://localhost:3000'} ));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// [ SERVER UP ]
app.listen(port, () => console.log(`Listening on port: ${port}`) );