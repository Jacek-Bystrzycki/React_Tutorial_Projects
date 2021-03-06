import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({items, remove, edit}) => {
  return <div className="grocery-list">
    {items.map(item => {
      const {id, name} = item;
      return <article key={id} className="grocery-item">
        <p className='title'>{name}</p>
        <div className="btn-container">
          <button type='button' className='edit-btn' onClick={()=>{edit(id)}}>
            <FaEdit/>
          </button>
          <button type='button' className='delete-btn' onClick={()=>{remove(id)}}>
            <FaTrash/>
          </button>
        </div>
      </article>
    })}
  </div>
};

export default List;
