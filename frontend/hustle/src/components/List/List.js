import React, { Component } from 'react';

import './List.css';
import Card from '../Card/Card';


class List extends Component {
    
    state = {
        jobApps: []
    }

    componentDidMount() {
        
    }

    render(props) {
        return (
            <div className="list">
                <div className='list-name'>{this.props.listName}</div>
                {this.props.listName == 'Wishlist' &&<button className='add-btn'>+</button>}
                {this.props.listName == 'Applied' &&<button className='add-btn'>+</button>}
                {this.props.listName == 'Applied' && this.state.jobApps.length != 0 && <Card /> }
            </div>
        );
    }
}

export default List;