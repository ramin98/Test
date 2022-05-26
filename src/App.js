import Messages from "./Components/Messages";
import Comments from "./Components/Comments";
import Users from "./Components/Users";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import axios from "axios";
import {useEffect,useState} from "react";

export default function App(){
const [show,showSet] = useState(false)
const [dataPosts,setDataPosts] = useState([])
const [dataComments,setDataComments] = useState([])
const [dataUsers,setDataUsers] = useState([])
const [activePageComments,activePageSetComments] = useState(1)
const [activePageUsers,activePageSetUsers] = useState(1)
const [activePagePosts,activePageSetPosts] = useState(1)

function handlePageChangePosts(pageNumber){
  axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=10`)
    .then(res => {
      setDataPosts(res.data)
    });
    activePageSetPosts(pageNumber)
};

function handlePageChangeUsers(pageNumber){
  axios.get(`https://jsonplaceholder.typicode.com/users?_page=${pageNumber}&_limit=1`)
    .then(res => {
      setDataUsers(res.data)
    });
    activePageSetUsers(pageNumber)
};

function handlePageChangeCommnents(pageNumber){
  axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${pageNumber}&_limit=5`)
    .then(res => {
      setDataComments(res.data)
    });
    activePageSetComments(pageNumber)
};
    
useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10`)
      .then(res => {
        setDataPosts(res.data)        
      });
      
  },[]) 
  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users?_page=1&_limit=1`)
      .then(res => {
        setDataUsers(res.data)        
      });
      
  },[]) 

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments?_page=1&_limit=5`)
      .then(res => {
        setDataComments(res.data)        
      });
      
  },[]) 
  
    
    return (
      <div className="App">
        <BrowserRouter>
        <div className="nav">
        <Link to='/Components/Users'>Users</Link>
        <Link to='/Components/Messages'>Messages</Link>
        </div>
        

        <Routes>
        <Route path="/Components/Messages" element={<Messages dataPosts={dataPosts} handle={handlePageChangePosts} active={activePagePosts} show={showSet}/>}/> 
        <Route path="/Components/Users" element={<Users dataPosts={dataPosts} dataComments={dataComments} dataUsers={dataUsers} handle={handlePageChangeUsers} active={activePageUsers}/>}/> 
        </Routes>
        </BrowserRouter>
        {show && <Comments dataComments={dataComments} handle={handlePageChangeCommnents} active={activePageComments} show={showSet}/>} 
      </div>
    );
}
