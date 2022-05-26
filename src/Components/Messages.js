import axios from "axios";
import Pagination from "react-js-pagination";
import {useEffect,useState} from "react";

export default function Messages({show}){
const [data,setData] = useState([])
const [activePage,activePageSet] = useState(1)
    
useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
      .then(res => {
        setData(res.data)        
      });
      console.log(data)
  },[]) 
  function handlePageChange(pageNumber){
    axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=10`)
      .then(res => {
        setData(res.data)
      });
      activePageSet(pageNumber)
  };
  
    return (
      <div className="messages">
          
        <h2>Messages</h2>
       <ul>{data.map(item => {
      return <li onClick={() => {show(true)}} key={item.id}>{item.title}</li>;
    })}</ul>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={100}
          onChange={handlePageChange}
        />
      </div>
    );
}
