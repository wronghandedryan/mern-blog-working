const mongoose = require(mongoose);
mongoose.connect('mongodb://localhost/article-db', function (err) {
 
   if (err) throw err;
 
   else console.log('Successfully connected');
 
});

module.exports = connection;