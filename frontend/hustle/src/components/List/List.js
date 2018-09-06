import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import './List.css';
import Card from '../Card/Card';



  
  function getModalStyle() {
    const top = 70; 
    const left = 60; 
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const styles = theme => ({
    paper: {
      flexDirection: 'column',
      position: 'absolute',
      width: '60%',
      height: '60%',
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
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                    >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography className="form-title" variant="display2" align="center" id="modal-title">
                        New Application Info 
                        </Typography>
                        <div className="form-fields">
                            <Typography className="input-title" variant="title">
                            Company Name: 
                            </Typography>
                            <input className="card-input" name="company" type="text" placeholder="company name"></input>
                            <Typography className="input-title" variant="title">
                            Position: 
                            </Typography>
                            <input className="card-input" name="position" type="text" placeholder="position"></input>
                            <Typography className="input-title" variant="title">
                            Point of Contact Name: 
                            </Typography>
                            <input className="card-input" name="poc name" type="text" placeholder="point of contact name"></input>
                            <Typography className="input-title" variant="title">
                            Point of Contact Number: 
                            </Typography>
                            <input className="card-input" name="poc number" type="text" placeholder="point of contact number"></input>
                            <Typography className="input-title" variant="title">
                            Point of Contact Email: 
                            </Typography>
                            <input className="card-input" name="poc email" type="text" placeholder="point of contact email"></input>
                            <Typography className="input-title" variant="title">
                            Source of Job: 
                            </Typography>
                            <input className="card-input" name="source" type="text" placeholder="e.g. Indeed, Monster, LinkedIn "></input>
                            <Typography className="input-title" variant="title">
                            Link to Job Posting: 
                            </Typography>
                            <input className="card-input" name="url" type="text" placeholder="url"></input>
                            <Typography className="input-title" variant="title">
                            Notes: 
                            </Typography>
                            <textarea className="card-textarea" name="notes" type="text" placeholder="notes..."></textarea>
                        </div>
                        <Button
                            style={{ fontSize: '1.5rem', backgroundColor: '#5c75e6', color: '#FFFFF9' }} 
                            variant='contained' 
                            className='submit-btn'
                            size="medium"
                            >Submit
                        </Button>
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


export default withStyles(styles)(List)