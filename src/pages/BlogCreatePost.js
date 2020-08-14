import React, { useState } from "react";
import axios from 'axios'
export default function BlogCreatePost(){
const [ data, setData ] = useState('')

const handleInputChange = ({target:{name,value}}) => setData({...data, [name]:value});

const handleSubmit = async e => {
  e.preventDefault();
  console.log(data)

  try {
   const resp = await axios.post("/api/posts", {data});
       window.location = "/ArticlesList/" + resp.data.id;
   } catch(e) {
    
    return;
   }

}

 return(
    <form onSubmit={handleSubmit}>
     <label id="PostTitle">Post Title:
        <textarea name="title" onChange={handleInputChange}/>
      </label>
      <label id="PostBody">Post:
        <textarea name="body" onChange={handleInputChange} />
      </label>
      <label id="PostAuthor">Author:
      <textarea name="author" onChange={handleInputChange}/>
      </label>


      <input type="submit" value="createPost" id="addNewPost" />
      
    </form>
  )
}







 




