import Pagination from "react-js-pagination";

export default function Users({active,handle,dataUsers,dataComments,dataPosts}){
  
    return (
      <div className="users">
          <h2>User</h2>
          
       <ul>
         {dataUsers.map(item => {
      return(<>
             <li>{item.name}</li>
             <li>{item.username}</li>
             <li>{item.email}</li>
             <li>{item.address.city}</li>
             </>
            ) 
    })}
    </ul>

<h3>User's Comments</h3>
<ul>
    {dataComments.map(item => {
      return <li key={item.id}>{item.body}</li>
    })}
    </ul>
    <h3>User's Posts</h3>
    <ul>    
    {dataPosts.map(item => {
      return <li key={item.id}>{item.title}</li> 
    })}
    </ul>
        <Pagination
          activePage={active}
          itemsCountPerPage={1}
          totalItemsCount={10}
          onChange={handle}
        />
      </div>
    );
}
