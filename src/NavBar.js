import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = ()=>(
  <nav>
    <ul>
       <li>
        <Link to = "/">Home</Link>
       </li>
       <li>
        <Link to = "/AboutPage">About</Link>
       </li>
       <li>
        <Link to = "/ArticlesList">Articles</Link>
       </li>
       <li>
        <Link to = "/BlogCreatePost">Create</Link>
       </li>
    </ul>
  </nav>
)
export default NavBar