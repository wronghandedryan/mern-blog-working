import React, {state} from 'react'; 
import NewPost from BlogCreatePost;


const authorContent = ({eTitle, data})=>{
  const upvoteArticle = async  ()=>{
    return{
      <div class="authorContent" key="eTitle">
        <h1>
          {{data}}
        </h1>
      </div>
    }
  };

export default autherContent;
