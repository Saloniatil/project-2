import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login'
import { useState, useEffect } from "react"
import Loading from './components/Loading';
import TodoList from './components/TodoList';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import Addpost from './components/Addpost';
import Add from '@mui/icons-material/Add';
import Home from './components/Home';
import loginpage from './components/loginpage';

function App() {
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts ] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage ] = useState(6);
   

  useEffect(() => {
    axios.get("http://localhost:3032/posts").then((result) => {
      setTodos(result.data);
      });
  }, [])

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:3032/posts");
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  //Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = pageNumber => setCurrentPage(pageNumber); 

  return (
    <> 
    <div>
        <BrowserRouter >
          <Navbar />
           
      <Routes>
         <Route path="/register" element={<Register />}></Route>
         <Route path="/login" element={<Login />}></Route>
         <Route path="/addpost" element={<Addpost />}></Route>
         <Route path="/home" element={<Home />}></Route>
     </Routes>
    </BrowserRouter>  
    </div>
 
      </>
       
  )
}
export default App;
