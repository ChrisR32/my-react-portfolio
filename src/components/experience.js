import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>

     
          

        <Cell col={12}>
          <h4 style={{marginTop:'-14px'}}>{this.props.jobName}</h4>
          <p style={{marginTop:'-14px'}}><strong>{this.props.jobDescription}</strong></p>
          <p style={{marginTop:'-14px'}}>{this.props.jobLocation}</p>
            <p style={{marginTop:'-14px'}}>{this.props.startYear} till {this.props.endYear}</p>

        </Cell>
      </Grid>
    )
  }
}

export default Experience;