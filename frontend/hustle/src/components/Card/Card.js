import React, { Component } from 'react';
import { Card, Typography, Icon } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './Card.css'



export default class extends Component {


    render(props) {
    
        return (
            <Card className="card" >
              <CardContent>
                  <Typography>
                        {this.props.companyName}
                  </Typography>
                  <Typography>
                        {this.props.position}
                  </Typography>
              </CardContent>
            </Card>
            );
    }
}


