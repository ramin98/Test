import Pagination from "react-js-pagination";

export default function Comments({show,active,handle,dataComments}){
  
    return (
      <div className="comments">
        <span onClick={() => {show(false)}} className="exit">X</span>
          <h2>Comments</h2>
          
       <ul>{dataComments.map(item => {
      return <li key={item.id}>{item.body}</li>;
    })}</ul>
        <Pagination
          activePage={active}
          itemsCountPerPage={5}
          totalItemsCount={5}
          onChange={handle}
        />
      </div>
    );
}
