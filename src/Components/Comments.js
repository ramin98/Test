import axios from "axios";
import Pagination from "react-js-pagination";
import {useEffect,useState} from "react";

export default function Comments({show}){
const [data,setData] = useState([])
const [activePage,activePageSet] = useState(1)
    
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments?_page=1&_limit=5")
      .then(res => {
        setData(res.data)        
      });
      console.log(data)
  },[]) 
  function handlePageChange(pageNumber){
    axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${pageNumber}&_limit=5`)
      .then(res => {
        setData(res.data)
      });
      activePageSet(pageNumber)
  };
  
    return (
      <div className="comments">
          <h2>Comments</h2>
          <span onClick={() => {show(false)}} className="exit">X</span>
       <ul>{data.map(item => {
      return <li key={item.id}>{item.body}</li>;
    })}</ul>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={5}
          totalItemsCount={5}
          onChange={handlePageChange}
        />
      </div>
    );
}
