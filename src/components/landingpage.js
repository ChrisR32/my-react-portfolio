import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', height: 'auto', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                      <img 
                      src="http://www.compuconsultations.org/profile-circle_white.png"
                      alt="Chris Morris"
                      className="profile-picture"
                      />
                      <div className="banner-text">
                          <h1>Christopher Morris</h1>
                          <h2>Junior Software Developer</h2>
                          <hr/>
                          <p>Ruby | HTML/CSS | Bootstrap | Rails | PostgreSQL | JavaScript | MongoDB | ExpressJS | ReactJS | NodeJS | jQuery</p>
                          </div>

                          <div className="social-links">
                              <a href="https://www.linkedin.com/in/chris-morris-r32/" rel="noopener noreferrer" target="_blank">
                                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                              </a>
                              <a href="https://github.com/ChrisR32" rel="noopener noreferrer" target="_blank">
                                  <i className="fa fa-github-square" aria-hidden="true" />
                              </a>
                              <a href="https://medium.com/@chrismorris_82249" rel="noopener noreferrer" target="_blank">
                                  <i className="fa fa-medium" aria-hidden="true" />
                              </a>
                              <a href="https://twitter.com/Chris_SW_DEV" rel="noopener noreferrer" target="_blank">
                                  <i className="fa fa-twitter-square" aria-hidden="true" />
                              </a>
                          </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;