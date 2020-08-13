import React from "react";
// import { Controlled as CodeMirror } from "react-codemirror2";
// import axios from "axios";
import Home from './pages/HomePage.js';
import {schema} from 'mongoose';

const URL = mongooseConnect('mongodb://localhost/article-db');

connectDB(URL) 
if(err) 
console.log('db not connected')
else{
  console.log('one less thing to worry about')
}


function App() {
  return (
    <div>
      <Home />
    </div>
    
  )
}


export default App; 