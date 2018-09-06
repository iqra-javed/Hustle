import React, { Component } from 'react';
import axios from 'axios';

import List from '../List/List';
import './ListContainer.css';

class ListContainer extends Component {

    state = {
        listNames: ['Wishlist', 'Applied', 'Phone', 'On Site', 'Offer', 'Rejected'],
        jobApps: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/applications/', { headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer-0c13f7fa15aa50d41e923abdcab134613d661820'}})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div className="list-container">
                 {this.state.listNames.map((item, index) => <List key={index+item} listName={item} jobApps={this.state.jobApps}/>)}
            </div>
        );
    }
}

export default ListContainer;