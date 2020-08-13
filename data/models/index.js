const mongoose = require('mongoose');

const Articles = require('./Articles');
const Author = require('./Author');
const connction = require('./connection');

mongoose.onConnection(console.log('models working'));
//added to see if help article issuee

const atricle = articles('atricle');
Articles.findByTitle('Title', function(err, title) {
        if (err) throw err(
          console.log('Title Not Found'))
        else{
         console.log('Title successfully found');
         }
});

Article.findByWordCount('min 300', function(err, wordCount){
  if (err) throw err(console.log('wordCount Not Found'))
  else{
    console.log('WordCount Found');
  }
});


Author.findByFirstName('', function(err, firstName) {
  if (err) throw err(console.log('Name Not Found'))
  else{console.log('Name Found')
  }
});

Author.findByLastName('', function(err, lastName) {
  if (err) throw err(console.log('Name Not Found'))
  else{console.log('Name Found')
  }
});


module.exports = Models;