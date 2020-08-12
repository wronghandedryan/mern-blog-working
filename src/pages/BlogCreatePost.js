import React, { useState } from "react";
import axios from "axios";

export default function BlogCreatePost(){
const [ data, setData ] = useState('')
 return(
    <form onSubmit={(data =[eTitle, e, eName]) => createPost(data)}>
     <label id="PostTitle">Post Title:
        <textarea onChange={etitle => setData(eTitle.target.value)} value={data} />
      </label>
      <label id="PostBody">Post:
        <textarea onChange={e => setData(e.target.value)} value={data} />
      </label>
      <label id="PostAuthor">Author:
      <textarea onChange={eName => setData(eName.target.value)} value={data} />
      </label>


      <input type="submit" value="create-post" id="addNewPost" />
      
    </form>
  )
}
const data = {'eTitle, e, eName': data}

async function createPost(data){
  e.preventDefault()
  try {
    const resp = await axios.post("/api/posts", {data});
  } catch(e) {
    NewPost({eTitle, e, eName}, data);
    return;
  }
  window.location = "/ArticlesList/" + resp.data.id;
}





 




