const mongoose = require(mongoose);
mongoose.connect('mongodb://localhost/article-db', function (err) {
 
   if (err) throw err;
 
   console.log('Successfully connected');
 
});

module.exports = connection;