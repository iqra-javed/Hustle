import React, { Component } from 'react';
import List from '../List/List';
import './ListContainer.css';

class ListContainer extends Component {

    state = {
        listNames: ['Wishlist', 'Applied', 'Phone', 'On Site', 'Offer', 'Rejected']
    }
    render() {
        return (
            <div className="list-container">
                 {this.state.listNames.map((item, index) => <List key={index+item} listName={item}/>)}
            </div>
        );
    }
}

export default ListContainer;