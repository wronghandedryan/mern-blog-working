import React from "react";
// import { Controlled as CodeMirror } from "react-codemirror2";
// import axios from "axios";
import Home from './pages/HomePage.js';
import {connection,schema} from 'mongoose';

const URL = mongooseConnect('mongodb://localhost/article-db');

connectDB(URL) 
if(err) console.log('err Connect Db') ;

function App() {
  return (
    <div>
      <Home />
    </div>
    
  )
}


export default App; 