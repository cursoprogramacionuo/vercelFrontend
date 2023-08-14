import { useEffect, useState } from 'react';
import './App.css';

let App = () => {

  let [items, setItems] = useState();

  useEffect(()=>{
    doRequestToBackEnd();
  },[])

  let doRequestToBackEnd = async () =>{
    let response = await fetch("http://localhost:4000/items")
    if (response.ok ){
      let jsonData = await response.json();
      setItems(jsonData);
    }
  }

  return (
    <div className="App">
      <h1>Items</h1>
      { items?.map( item => 
        <p>{ item.name }</p>
      )}
    </div>
  );
}

export default App;
