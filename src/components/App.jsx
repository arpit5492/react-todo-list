import React, { useState } from "react";

function App() {

  const [item, addItem] = useState("");  

  const [listItems, setListItem] = useState([]);

  function handleChange(event){
    const value = event.target.value;

    addItem(value);
  }

  // console.log(item);

  function buttonClick(){
    setListItem(prevItem => {
      return [
        ...prevItem,
        item
      ]
    });
    addItem("");
  }

  // console.log(listItems);
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text"
           name="itemName"
           value={item}
           onChange={handleChange}
        />
        <button onClick={buttonClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map(itemlst => {
            return (
              <li key={itemlst}>{itemlst}</li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
