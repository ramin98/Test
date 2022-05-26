import axios from "axios";
import Pagination from "react-js-pagination";
import {useEffect,useState} from "react";

export default function Users(){
const [data,setData] = useState([])
const [activePage,activePageSet] = useState(1)
    
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users?_page=1&_limit=1")
      .then(res => {
        setData(res.data)        
      });
      console.log(data)
  },[]) 
  function handlePageChange(pageNumber){
    axios.get(`https://jsonplaceholder.typicode.com/users?_page=${pageNumber}&_limit=1`)
      .then(res => {
        setData(res.data)
      });
      activePageSet(pageNumber)
  };
  
    return (
      <div className="comments">
          <h2>Users</h2>
          
       <ul>{data.map(item => {
      return(<>
             <li>{item.name}</li>
             <li>{item.username}</li>
             <li>{item.email}</li>
             <li>{item.address.city}</li>
             </>
            ) 
    })}</ul>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={1}
          totalItemsCount={10}
          onChange={handlePageChange}
        />
      </div>
    );
}