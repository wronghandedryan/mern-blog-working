import React, {state} from 'react'; 


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
