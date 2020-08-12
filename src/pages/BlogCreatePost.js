import React, { useState } from "react";
import axios from "axios";

export default function BlogCreatePost(){
const [ data, setData ] = useState('')
 return(
    <form onSubmit={e => createPost(e, data)}>
      <label>Post:
        <textarea onChange={e => setData(e.target.value)} value={data} />
      </label>


      <input type="submit" value="create-post" />
    </form>
  )
}

async function createPost(e, data){
  e.preventDefault()
  try {
    const resp = await axios.post("/api/posts", {data});
  } catch(e) {
    alert(e);
    return;
  }
  window.location = "/posts/" + resp.data.id;
}

