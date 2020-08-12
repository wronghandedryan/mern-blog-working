import React, {state} from 'react'; 
import {NewPost, data} from './BlogCreatePost';


const authorContent = ({eTitle, e, eName}, data)=>{
  const authorContent = async  ()=>{
    return{
     authorContent: map({NewPost})(
      <div class="authorContent">
        <h1>
          {{data}}
        </h1>
      </div>
        )
      )}
  


export default authorContent();