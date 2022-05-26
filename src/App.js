import Messages from "./Components/Messages";
import Comments from "./Components/Comments";
import Users from "./Components/Users";
import {useState} from "react";

export default function App(){

const [show,showSet] = useState(false)
    
    return (
      <div className="App">
        <Users/>

        <Messages show={showSet}/>

        {show && <Comments show={showSet}/>} 
      </div>
    );
}
