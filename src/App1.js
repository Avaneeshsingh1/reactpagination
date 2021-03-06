import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Pagination1} from './Pagination1'
import './App1.css'

function App1() {
    const[totalpage,setTotalpage]=useState(0)
    const[posts,setPosts]=useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const [postsPerpage,setPostsPerpage]= useState(0)

    useEffect(()=>{
        const fetchPosts=async()=>{
          
          const res=await axios.get(`https://reqres.in/api/users?page=${currentPage}`)
          
          setTotalpage(res.data.total_pages)
          setPosts(res.data.data)
          setPostsPerpage(res.data.per_page)
        } 
        fetchPosts()
      },[currentPage])
      const paginate=(pageNumber)=> setCurrentPage(pageNumber)
      console.log(postsPerpage)
    return (
    <>
      <div className="container grid">
        
        {posts.map(post=>{
      return  (
        <div className="d-flex">
  <div class="card" key={post.id}>
    <img src={post.avatar} class="card-img-top w-25" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{post.first_name}</h5>
      <h5 className="card-title">{post.last_name}</h5>
      <h5 className="card-title">{post.email}</h5>
  
      
      
    </div>
  </div> 
  </div>    
      )
  })}
          
  </div>
  <div className="container">
              <Pagination1 totalpage={totalpage} paginate={paginate} />
              </div>

   </>         
  
        
    )
}

export default App1
