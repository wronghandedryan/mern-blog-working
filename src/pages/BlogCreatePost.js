import React, { useState } from "react";
import axios from "axios";

export default function BlogCreatePost(){
const [ data, setData ] = useState('')
 return(
    <form onSubmit={e => createPost((eTitle, e , authName), data)}>
     <label>Post Title:
        <textarea onChange={e => setData(eTitle.target.value)} value={data} />
      </label>
      <label>Post:
        <textarea onChange={e => setData(e.target.value)} value={data} />
      </label>
      <label>Author:
      <textarea onChange={e => setName(authName.target.value)} value={data} />
      </label>


      <input type="submit" value="create-post" id="addNewPost" />
      
    </form>
  )
}

async function createPost(e, data){
  e.preventDefault()
  try {
    const resp = await axios.post("/api/posts", {data});
  } catch(e) {
    NewPost(e);
    return;
  }
  window.location = "/ArticlesList/" + resp.data.id;
}

export default NewPost;

//const createPost = axios.post(createPost);
 




