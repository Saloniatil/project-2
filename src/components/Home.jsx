import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Register';
import Login from './Login'
import { useState, useEffect } from "react"
import axios from 'axios';
import Posts from './Posts';
import Pagination from './Pagination';
import Addpost from "./Addpost";
import Add from '@mui/icons-material/Add';
 


function Home() {
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts ] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [page, setPage] = useState(0); 
  const limit = 8; 


  useEffect(() => { fetchPosts();}, [page]);
  const fetchPosts = async () => {
    setLoading(true);
    try {
        const response = await axios.get(`http://localhost:3032/posts?_start=${page * limit}&_limit=${limit}`);
        setPosts(response.data);
    } catch (error) {
        console.error('Error fetching posts:', error);
    } finally {
        setLoading(false);
    }
};
const handleNext = () => {
    setPage(prevPage => prevPage + 1);
};
const handlePrevious = () => {
    if (page > 0) {
        setPage(prevPage => prevPage - 1);
    }
};
   
    //Get Current Posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    //Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'> </h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        
      />

     
      <button    onClick={handlePrevious} disabled={page === 0}>Previous</button>
      <button onClick={handleNext}>  Next  </button> 
      </div>
  )
}

export default Home
 