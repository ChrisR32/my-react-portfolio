import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, Tooltip, CardText } from 'react-mdl';

class Projects extends Component {
    render() {
        return(

                <Grid>
                    <Cell col={12}>
                        <div className="projects-grid">
                            
                        <div style={{padding: '20px'}}> 
                                <Card shadow={5} style={{minWidth: '650', margin: 'auto'}}>
                                    <CardTitle className="the-project-title" style={{ color: '#fff', height: '240px', width: '100%', background: 
                                    'url(http://www.compuconsultations.org/profile21.png) center / cover'}} ></CardTitle>
                                    <CardText style={{height: '150px'}}>
                                    <div className="the-project-title"><p>Profile Page 2.0</p></div>
                                    This is the latest version of my profile page, made using react, react-mdl material design and react router. In-fact it's the same site your browsing now.
                                    <br/><br/>
                                    <strong><div style={{ textAlign: 'center' }}>React.JS | CSS | HTML</div></strong>
                                    </CardText>
                                    <CardActions border>
                                    <Tooltip style={{ float: 'left' }} label="Check out the code" position="bottom" large>
                                    <a href="https://github.com/ChrisR32/my-react-portfolio" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub Repository</Button></a>
                                        </Tooltip>
                                        <Tooltip style={{ float: 'right' }} label="See it in action" position="bottom" large>
                                    <a href="http://profile.compuconsultations.com/" rel="noopener noreferrer" target="_blank">
                                        <Button colored>Live Site</Button></a></Tooltip>
                                    </CardActions>
                                </Card>
                                </div>

                                <div style={{padding: '20px'}}> 
                                <Card shadow={5} style={{minWidth: '650', margin: 'auto'}}>
                                    <CardTitle className="the-project-title" style={{ color: '#fff', height: '240px', width: '100%', background: 
                                    'url(http://www.compuconsultations.org/mars1.png) center / cover'}} ></CardTitle>
                                    <CardText style={{height: '150px'}}>
                                    <div className="the-project-title"><p>Mars Realestate</p></div>
                                    A two-sided marketplace where users can trade their property on mars. Utilizing AWS-S3, Heroku, mail-gun.
                                    <br/><br/>
                                    <strong><div style={{ textAlign: 'center' }}>Ruby on Rails | JavaScript | Bootstrap Omniauth | PostgreSQL</div></strong>
                                    </CardText>
                                    <CardActions border>
                                    <Tooltip style={{ float: 'left' }} label="Check out the code" position="bottom" large>
                                    <a href="https://github.com/ChrisR32/MarsHome" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub Repository</Button></a>
                                        </Tooltip>
                                        <Tooltip style={{ float: 'right' }} label="See it in action" position="bottom" large>
                                    <a href="https://warm-brook-32678.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                                        <Button colored>Live Site</Button></a></Tooltip>
                                    </CardActions>
                                </Card>
                                </div>

                                <div style={{padding: '20px'}}> 
                                <Card shadow={5} style={{minWidth: '650', margin: 'auto'}}>
                                    <CardTitle className="the-project-title" style={{ color: '#fff', height: '240px', width: '100%', background: 
                                     'url(http://www.compuconsultations.org/poke1.png) center / cover'}} ></CardTitle>
                                    <CardText style={{height: '150px'}}>
                                    <div className="the-project-title"><p>Pokemon API App</p></div>
                                    This app was created using react its purpose is to display various pokemon stats including images to the user, the app does this by utilizing a pokemon api. 
                                    <br/><br/>
                                    <strong><div style={{ textAlign: 'center' }}>React.JS | CSS | HTML</div></strong>
                                    </CardText>
                                    <CardActions border>
                                    <Tooltip style={{ float: 'left' }} label="Check out the code" position="bottom" large>
                                    <a href="https://github.com/ChrisR32/pokemon" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub Repository</Button></a>
                                        </Tooltip>
                                        <Tooltip style={{ float: 'right' }} label="See it in action" position="bottom" large>
                                    <a href="http://pokemon.compuconsultations.com/" rel="noopener noreferrer" target="_blank">
                                        <Button colored>Live Site</Button></a></Tooltip>
                                    </CardActions>
                                </Card>
                                </div>

                                <div style={{padding: '20px'}}> 
                                <Card shadow={5} style={{minWidth: '650', margin: 'auto'}}>
                                    <CardTitle className="the-project-title" style={{ color: '#fff', height: '240px', width: '100%', background: 
                                    'url(http://www.compuconsultations.org/profile11.png) center / cover'}} ></CardTitle>
                                    <CardText style={{height: '150px'}}>
                                    <div className="the-project-title"><p>Profile Page 1.0</p></div>
                                    Created for an assesment at Coder Academy this ia a front-end portfolio website built to demonstrate my understanding and use of HTML and CSS.
                                    <br/><br/>
                                    <strong><div style={{ textAlign: 'center' }}>HTML | CSS | JavaScript</div></strong>
                                    </CardText>
                                    <CardActions border>
                                    <Tooltip style={{ float: 'left' }} label="Check out the code" position="bottom" large>
                                    <a href="https://github.com/ChrisR32/Profile-Page" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub Repository</Button></a>
                                        </Tooltip>
                                        <Tooltip style={{ float: 'right' }} label="See it in action" position="bottom" large>
                                    <a href="http://www.compuconsultations.org/" rel="noopener noreferrer" target="_blank">
                                        <Button colored>Live Site</Button></a></Tooltip>
                                    </CardActions>
                                </Card>
                                </div>

                                <div style={{padding: '20px'}}> 
                                <Card shadow={5} style={{minWidth: '650', margin: 'auto'}}>
                                    <CardTitle className="the-project-title" style={{ color: '#fff', height: '240px', width: '100%', background: 
                                    'url(http://www.compuconsultations.org/result1.png) center / cover'}} ></CardTitle>
                                    <CardText style={{height: '150px'}}>
                                    <div className="the-project-title"><p>Return Result</p></div>
                                    A terminal application designed in Ruby that was designed to select a random person in a class and keep score on how many times that person had been selected.
                                    <br/><br/>
                                    <div style={{ textAlign: 'center' }}><strong>Ruby | RubyGems</strong></div>
                                    </CardText>
                                    <CardActions border>
                                    <Tooltip style={{ float: 'left' }} label="Check out the code" position="bottom" large>
                                    <a href="https://github.com/ChrisR32/get-result" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub Repository</Button></a>
                                        </Tooltip>
                                        <Tooltip style={{ float: 'right' }} label="See it in action" position="bottom" large>
                                    <a href="https://youtu.be/4p2OMFIPKXQ" rel="noopener noreferrer" target="_blank">
                                        <Button colored>View Video</Button></a></Tooltip>
                                    </CardActions>
                                </Card>
                                </div>

                                <div style={{padding: '20px'}}> 
                                <Card shadow={5} style={{minWidth: '650', margin: 'auto'}}>
                                    <CardTitle className="the-project-title" style={{ color: '#fff', height: '240px', width: '100%', background: 
                                    'url(http://www.compuconsultations.org/ssh1.png) center / cover'}} ></CardTitle>
                                    <CardText style={{height: '150px'}}>
                                    <div className="the-project-title"><p>UnRaid SSH Dashboard</p></div>
                                    This is a terminal application designed in Ruby that allows the user to SSH into their UnRaid NAS server to monitor system status all by using standard terminal commands.
                                    <br/><br/>
                                    <div style={{ textAlign: 'center' }}><strong>Ruby | RubyGems</strong></div>
                                    </CardText>
                                    <CardActions border>
                                    <Tooltip style={{ float: 'left' }} label="Check out the code" position="bottom" large>
                                    <a href="https://github.com/ChrisR32/unraid_ssh_dashboard/" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub Repository</Button></a>
                                        </Tooltip>
                                        <Tooltip style={{ float: 'right' }} label="See it in action" position="bottom" large>
                                    <a href="https://youtu.be/CQ_ZqdHkd5U" rel="noopener noreferrer" target="_blank">
                                        <Button colored>View Video</Button></a></Tooltip>
                                    </CardActions>
                                </Card>
                                </div>
                        </div>
                    </Cell>
                </Grid>
        )
    }
}

export default Projects;


