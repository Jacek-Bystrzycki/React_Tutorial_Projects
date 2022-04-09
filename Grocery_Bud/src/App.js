import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let localItems;
  if (localStorage.getItem("items")) {
    localItems = JSON.parse(localStorage.getItem("items"));
  } else {
    localItems = [];
  };
  return localItems;
};

function App() {

const [name, setName] = useState("");
const [list, setList] = useState(getLocalStorage());
const [isEdit, setIsEdit] = useState(false);
const [editID, setEditID] = useState(null);
const [alert, setAlert] = useState({show:false, msg:"", type:""});

const handleSubmit = (ev) => {
  ev.preventDefault();
  if (!name){
    alertHandle(true, "Empty name, please type item name", "alert-danger");
  } else if (isEdit){
    setList((oldList) =>{
      const newList = oldList.map(item => {
        if (item.id === editID) {
          return {...item, name: name};
        };
        return item;
      });
      return newList;
    });
    alertHandle(true, "Item edited", "alert-success");
    setName("");
    setEditID(null);
    setIsEdit(false);
  } else {
    const newItem = {id: new Date().getTime().toString(), name: name};
    setList([...list, newItem]);
    alertHandle(true, "Item added", "alert-success");
    setName("");
  };
};

const clearAllItems = () => {
  setList([]);
  setAlert({show:true, msg:"All items deleted", type:"alert-danger"});
  localStorage.clear();
};

const alertHandle = (show=false, msg="", type="") => {
  setAlert({show, msg, type});
};

const removeItem = (id) => {
  alertHandle(true, "Item removed", "alert-danger");
  setList((oldList)=>{
    const newList = oldList.filter(item => item.id !== id);
    return newList;
  });
};

const editItem = (id) => {
  const itemName = list.find(item => item.id === id).name;
  setName(itemName);
  setIsEdit(true);
  alertHandle(true, "Editing item", "alert-danger");
  setEditID(id);
};

useEffect(()=>{
  localStorage.setItem("items", JSON.stringify(list));
},[list]);

  return <React.Fragment>
    <section className="section-center">
    <form onSubmit={handleSubmit} className="grocery-form">
      {alert.show && <Alert alert={alert} removeAlert={alertHandle}/>}
      <h3>grocery bud</h3>
      <div className="form-control">
        <input type="text" className='grocery' placeholder='e.g. eggs' value={name} onChange={(ev)=>{setName(ev.target.value)}}/>
        <button type='submit' className='submit-btn'>
          {isEdit? "edit" : "submit"}
        </button>
      </div>
    </form>
      {list.length > 0 && (<>
      <div className="grocery-container">
      <List items={list} remove={removeItem} edit={editItem}/>
      <button className="clear-btn" onClick={clearAllItems}>
        clear items
      </button>
      </div></>
      )}
    </section>
  </React.Fragment> 
};

export default App;
