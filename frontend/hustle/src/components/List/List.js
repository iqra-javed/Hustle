import React, { Component } from 'react';

import './List.css';
import Card from '../Card/Card';


import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
    },
  });
  
class List extends Component {

    state = {
        open: false,
      };
    
    handleOpen = () => {
    this.setState({ open: true });
    };

    handleClose = () => {
    this.setState({ open: false });
    };
    
    render(props) {

        const { classes } = this.props;

        return (
            <div className="list">
                {/* <Typography gutterBottom>Click to get the full Modal experience!</Typography> */}
                {/* <Button onClick={this.handleOpen}>Open Modal</Button> */}
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                    >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="title" id="modal-title">
                            Text in a modal
                        </Typography>
                        <Typography variant="subheading" id="simple-modal-description">
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                        <Button
                            style={{ fontSize: '1.5rem', backgroundColor: '#5c75e6' }} 
                            color="inherit" 
                            variant='contained' 
                            className='logout-btn'
                            size='small'
                            >Submit
                        </Button>
                        {/* <SimpleModalWrapped /> */}
                    </div>
                </Modal>
                <div className='list-name'>{this.props.listName}</div>
                {this.props.listName === 'Wishlist' && <button className='add-btn' onClick={this.handleOpen}>+</button>}
                {this.props.listName === 'Applied' && <button className='add-btn' onClick={this.handleOpen}>+</button>}
                {this.props.listName === 'Applied' && this.props.jobApps.length !== 0 && <Card /> }
            </div>
        );
    }
}

// const SimpleModalWrapped = withStyles(styles)(List);

// export default SimpleModalWrapped;

export default withStyles(styles)(List)