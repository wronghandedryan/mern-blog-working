import React from 'react'
import ArticleList from '../components/ArticlesList'
import articleContent from './ArticleContent'




const ArticleListPage = ()=>(
       <>
       <h1>Articles list</h1>
       <ArticleList articles={articleContent}/>
       </>
     
)
export default ArticleListPage;