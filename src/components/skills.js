import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
        <Grid>

     
          

        <Cell col={3}>
          <h4 style={{marginTop:'-14px', textAlign: 'center'}}>Ruby</h4>
          <h4 style={{marginTop:'-14px', textAlign: 'center'}}>HTML</h4>
          <h4 style={{marginTop:'-14px', textAlign: 'center'}}>CSS</h4>
        </Cell>

        <Cell col={3}>
          <h4 style={{marginTop:'-14px', textAlign: 'center'}}>Rails</h4>
          <h4 style={{marginTop:'-14px', textAlign: 'center'}}>PostgreSQL</h4>
          <h4 style={{marginTop:'-14px', textAlign: 'center'}}>JavaScript</h4>
        </Cell>

        <Cell col={3}>
          <h4 style={{marginTop:'-14px', textAlign: 'center'}}>Express JS</h4>
          <h4 style={{marginTop:'-14px', textAlign: 'center'}}>React JS</h4>
          <h4 style={{marginTop:'-14px', textAlign: 'center'}}>Node JS</h4>
        </Cell>

        <Cell col={3}>
          <h4 style={{marginTop:'-14px', textAlign: 'center'}}>jQuery</h4>
          <h4 style={{marginTop:'-14px', textAlign: 'center'}}>MongoDB</h4>
          <h4 style={{marginTop:'-14px', textAlign: 'center'}}>Bootstrap</h4>

        </Cell>
        </Grid>
    )
  }
}

export default Skills;