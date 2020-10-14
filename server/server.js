const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');

require('dotenv').config();
require('./routes/user.routes')(app);
require('./config/mongoose.config'); 
require("./config/passport");

// [ SERVER SETUP ]
const port = process.env.PORT || 8000;
app.use(cookieParser());
app.use(cors( {credentials: true, origin: 'http://localhost:3000'} ));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// [ GOOGLE LOGIN / PASSPORT ]
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use( express.static("client/build") );

app.use( cookieSession({
    name: 'login-session',
    keys: ['key1', 'key2']
}) )

app.use( passport.initialize() );
app.use( passport.session() );

// [ SERVER UP ]
app.listen(port, () => console.log(`Listening on port: ${port}`) );