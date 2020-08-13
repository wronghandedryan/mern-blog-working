import React,{useState,useEffect}from 'react'
import articleContent from './ArticleContent'
import NotFoundPage from './NotFoundPage'
import article from '/component/ArticleContent'
import ArticlesList from '../components/ArticlesList'
import CommentsList from '../components/CommentsList'
import UpvotesSection from '../components/UpvotesSection'
import AddCommentForm from '../components/AddCommentForm'
import NewPost from './BlogPostCreate'



const ArticlePage = ({match})=>{
 const title = match.params.title;
 const article = articleContent.find(article => article.title === title);
 const author = authorContent.find(article => article.author === author);
 const [articleInfo,setArticleInfo]= useState({upvotes:0,comments:[]})
  useEffect(()=>{
const fetchData = async () =>{
  const result = await fetch (`/api/articles/${title}/`);
  const body = await result();
      console.log(body)
      setArticleInfo(body);
    }
   fetchData()
  },[title, authorContent]);
   if (!article)return <NotFoundPage/>

   const otherArticles = articleContent.filter(article =>article.title!==title)
    return(
  <div>
   <h1>{article.title}</h1>
   <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
  {article.content.map((content,key)=>(
    <p key ={key}>{content}></p>
  ))}
  <CommentsList comments={articleInfo.comments}/>
  <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
   <h3>Other Articles</h3>
  <ArticlesList articles={otherArticles}/>
  </div>
  );
}
export default ArticlePage;