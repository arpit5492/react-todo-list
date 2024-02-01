import React, { useCallback, useState } from "react";

function App() {

  const [item, addItem] = useState({
    itemName: ""
  });  

  const [listItem, setListItem] = useState({
    itemName: ""
  });

  function handleChange(event){
    const {name, value} = event.target;

    // console.log(name);
    // console.log(value);

    addItem((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  function buttonClick(){
    setListItem(item);
  }

  console.log(listItem);
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text"
           name="itemName"
           value={item.itemName}
           onChange={handleChange}
        />
        <button onClick={buttonClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>{listItem.itemName}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
