import React, { useState } from "react";
import axios from 'axios'
export default function BlogCreatePost(){
const [ data, setData ] = useState('')
 return(
    <form onSubmit={([eTitle, e, eName] = data) => createPost(data)}>
     <label id="PostTitle">Post Title:
        <textarea onChange={data => setData(eTitle.target.value)} value={data} />
      </label>
      <label id="PostBody">Post:
        <textarea onChange={data => setData(e.target.value)} value={data} />
      </label>
      <label id="PostAuthor">Author:
      <textarea onChange={data => setData(eName.target.value)} value={data} />
      </label>


      <input type="submit" value="createPost" id="addNewPost" />
      
    </form>
  )
}

const e = createPost();
async function createPost(data){
  e.preventDefault()
  try {
    const resp = await axios.post("/api/posts", {data});
  } catch(e) {
    NewPost([eTitle, e, eName], data);
    return;
  }
  window.location = "/ArticlesList/" + resp.data.id;
}





 




