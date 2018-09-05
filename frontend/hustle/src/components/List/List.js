import React from 'react';

import './List.css';

function List(props) {
    return (
        <div className='list'>
            <div className="list-name">{props.listName}</div>
            <button className="add-btn">+</button>
        </div>
    );

}

export default List;