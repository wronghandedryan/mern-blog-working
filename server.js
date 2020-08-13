const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connection = require('connection');
const models = require('./data/models/index');
const config = require('./data/config/Blog');
const db = require('./data/blog');
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})
require('dotenv').config();

const app = express();

// connect to db

 app.configure(function () {
   //...
   // set the 'dbUrl' to the mongodb url that corresponds to the
   // environment we are in
   app.set('dbUrl', config.db[app.settings.env]);
   // connect mongoose to the mongo dbUrl
   mongoose.connect(app.get('dbUrl'));
   //...
 });
// import routes
const Routes = require('./routes/index');


// app middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(cors()); // allows all origins
if ((process.env.NODE_ENV = 'development')) {
    app.use(cors({ origin: `http://localhost:3000` }));
}

// middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);

const port = process.env.PORT || PORT;
app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});