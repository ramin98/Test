import Pagination from "react-js-pagination";

export default function Messages({show,active,handle,dataPosts}){

  
    return (
      <div className="messages">
          
        <h2>Messages</h2>
       <ul>{dataPosts.map(item => {
      return <li onClick={() => {show(true)}} key={item.id}>{item.title}</li>;
    })}</ul>
        <Pagination
          activePage={active}
          itemsCountPerPage={10}
          totalItemsCount={100}
          onChange={handle}
        />
      </div>
    );
}
