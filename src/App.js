import Messages from "./Components/Messages";
import Comments from "./Components/Comments";
import Users from "./Components/Users";
import {useState} from "react";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";

export default function App(){

const [show,showSet] = useState(false)
    
    return (
      <div className="App">
        <BrowserRouter>
        <div className="nav">
        <Link to='/Components/Users'>Users</Link>
        <Link to='/Components/Messages'>Messages</Link>
        </div>
        
        <Routes>
        <Route path="/Components/Messages" element={<Messages show={showSet}/>}/> 
        <Route path="/Components/Users" element={<Users/>}/> 
        </Routes>
        </BrowserRouter>
        {show && <Comments show={showSet}/>} 
      </div>
    );
}
