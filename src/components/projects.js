import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    render() {
        return(

                <Grid>
                    <Cell col={12}>
                        <div className="projects-grid">
                            <div style={{padding: '20px'}}> 
                                <Card shadow={5} style={{minWidth: '650', margin: 'auto'}}>
                                    <CardTitle className="the-project-title" style={{ color: '#fff', height: '240px', width: '100%', background: 
                                    'url(http://www.compuconsultations.org/chat.png) center / cover'}} ></CardTitle>
                                    <CardText style={{height: '150px'}}>
                                    <div className="the-project-title"><p>Classic Computer Chat</p></div>
                                    This is a realtime chat app designed for people who have an interest in Classic Computers, helping them meet like minded people.
                                    <br/><br/>
                                    <strong><div style={{ textAlign: 'center' }}>Node.JS | JavaScript | Express | Socket.io | CSS | HTML</div></strong>
                                    </CardText>
                                    <CardActions border>
                                    <a href="https://github.com/ChrisR32/" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub Repository</Button></a>
                                    <a href="http://www.compuconsultations.org/" style={{ textAlign: 'right', paddingLeft: '33px' }} rel="noopener noreferrer" target="_blank">
                                        <Button colored>Live Site</Button></a>
                                    </CardActions>
                                </Card>
                                </div>

                            <div style={{padding: '20px'}}> 
                                <Card shadow={5} style={{minWidth: '650', margin: 'auto'}}>
                                    <CardTitle className="the-project-title" style={{ color: '#fff', height: '240px', width: '100%', background: 
                                    'url(http://www.compuconsultations.org/snake.png) center / cover'}} ></CardTitle>
                                    <CardText style={{height: '150px'}}>
                                    <div className="the-project-title"><p>Snake Feat. Nokia 5110</p></div>
                                    A graphically simple snake game which is based on the classic highly-additive snake game that was best known as a feature on Nokia phones in the late 90's.
                                    <br/><br/>
                                    <strong><div style={{ textAlign: 'center' }}>React JS | JavaScript | CSS | HTML</div></strong>
                                    </CardText>
                                    <CardActions border>
                                    <a href="https://github.com/ChrisR32/" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub Repository</Button></a>
                                    <a href="http://www.compuconsultations.org/" style={{ textAlign: 'right', paddingLeft: '33px' }} rel="noopener noreferrer" target="_blank">
                                        <Button colored>Live Site</Button></a>
                                    </CardActions>
                                </Card>
                                </div>

                                <div style={{padding: '20px'}}> 
                                <Card shadow={5} style={{minWidth: '650', margin: 'auto'}}>
                                    <CardTitle className="the-project-title" style={{ color: '#fff', height: '240px', width: '100%', background: 
                                    'url(http://www.compuconsultations.org/tic-tac-toe.png) center / cover'}} ></CardTitle>
                                    <CardText style={{height: '150px'}}>
                                    <div className="the-project-title"><p>Tic-Tac-Toe Game</p></div>
                                    This is a an interactive tic-tac-toe game that can be played by 2 users and was created to better demonstrate how to use webhooks with react.js.
                                    <br/><br/>
                                    <strong><div style={{ textAlign: 'center' }}>React JS | JavaScript | CSS | HTML</div></strong>
                                    </CardText>
                                    <CardActions border>
                                    <a href="https://github.com/ChrisR32/" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub Repository</Button></a>
                                    <a href="http://www.compuconsultations.org/" style={{ textAlign: 'right', paddingLeft: '33px' }} rel="noopener noreferrer" target="_blank">
                                        <Button colored>Live Site</Button></a>
                                    </CardActions>
                                </Card>
                                </div>

                                <div style={{padding: '20px'}}> 
                                <Card shadow={5} style={{minWidth: '650', margin: 'auto'}}>
                                    <CardTitle className="the-project-title" style={{ color: '#fff', height: '240px', width: '100%', background: 
                                     'url(http://www.compuconsultations.org/pokemon.png) center / cover'}} ></CardTitle>
                                    <CardText style={{height: '150px'}}>
                                    <div className="the-project-title"><p>Pokemon API App</p></div>
                                    This app was created using react its purpose is to display various pokemon stats including images to the user, the app does this by utilizing a pokemon api. 
                                    <br/><br/>
                                    <strong><div style={{ textAlign: 'center' }}>React JS | CSS | HTML</div></strong>
                                    </CardText>
                                    <CardActions border>
                                    <a href="https://github.com/ChrisR32/" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub Repository</Button></a>
                                    <a href="http://www.compuconsultations.org/" style={{ textAlign: 'right', paddingLeft: '33px' }} rel="noopener noreferrer" target="_blank">
                                        <Button colored>Live Site</Button></a>
                                    </CardActions>
                                </Card>
                                </div>

                                <div style={{padding: '20px'}}> 
                                <Card shadow={5} style={{minWidth: '650', margin: 'auto'}}>
                                    <CardTitle className="the-project-title" style={{ color: '#fff', height: '240px', width: '100%', background: 
                                    'url(http://www.compuconsultations.org/Profile_new.png) center / cover'}} ></CardTitle>
                                    <CardText style={{height: '150px'}}>
                                    <div className="the-project-title"><p>Current Profile Page</p></div>
                                    This is the latest version of my profile page, made using react, react-mdl material design and react router. In-fact it's the same site your browsing now.
                                    <br/><br/>
                                    <strong><div style={{ textAlign: 'center' }}>React JS | CSS | HTML</div></strong>
                                    </CardText>
                                    <CardActions border>
                                    <a href="https://github.com/ChrisR32/my-react-portfolio" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub Repository</Button></a>
                                    <a href="http://www.compuconsultations.org/" style={{ textAlign: 'right', paddingLeft: '33px' }} rel="noopener noreferrer" target="_blank">
                                        <Button colored>Live Site</Button></a>
                                    </CardActions>
                                </Card>
                                </div>

                                <div style={{padding: '20px'}}> 
                                <Card shadow={5} style={{minWidth: '650', margin: 'auto'}}>
                                    <CardTitle className="the-project-title" style={{ color: '#fff', height: '240px', width: '100%', background: 
                                    'url(http://www.compuconsultations.org/marshome.png) center / cover'}} ></CardTitle>
                                    <CardText style={{height: '150px'}}>
                                    <div className="the-project-title"><p>Mars Realestate</p></div>
                                    A two-sided marketplace where users can trade their property on mars. Utilizing AWS-S3, Heroku, mail-gun and using the facebook-api. 
                                    <br/><br/>
                                    <strong><div style={{ textAlign: 'center' }}>Ruby on Rails | JavaScript | Bootstrap Omniauth | PostgreSQL</div></strong>
                                    </CardText>
                                    <CardActions border>
                                    <a href="https://github.com/ChrisR32/MarsHome" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub Repository</Button></a>
                                    <a href="https://warm-brook-32678.herokuapp.com/" style={{ textAlign: 'right', paddingLeft: '33px' }} rel="noopener noreferrer" target="_blank">
                                        <Button colored>Live Site</Button></a>
                                    </CardActions>
                                </Card>
                                </div>

                                <div style={{padding: '20px'}}> 
                                <Card shadow={5} style={{minWidth: '650', margin: 'auto'}}>
                                    <CardTitle className="the-project-title" style={{ color: '#fff', height: '240px', width: '100%', background: 
                                    'url(http://www.compuconsultations.org/profile_1st.png) center / cover'}} ></CardTitle>
                                    <CardText style={{height: '150px'}}>
                                    <div className="the-project-title"><p>Original Profile Page</p></div>
                                    Created for an assesment at Coder Academy this ia a front-end portfolio website built to demonstrate my understanding and use of HTML and CSS.
                                    <br/><br/>
                                    <strong><div style={{ textAlign: 'center' }}>HTML | CSS | JavaScript</div></strong>
                                    </CardText>
                                    <CardActions border>
                                    <a href="https://github.com/ChrisR32/Profile-Page" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub Repository</Button></a>
                                    <a href="http://www.compuconsultations.org/" style={{ textAlign: 'right', paddingLeft: '33px' }} rel="noopener noreferrer" target="_blank">
                                        <Button colored>Live Site</Button></a>
                                    </CardActions>
                                </Card>
                                </div>

                                <div style={{padding: '20px'}}> 
                                <Card shadow={5} style={{minWidth: '650', margin: 'auto'}}>
                                    <CardTitle className="the-project-title" style={{ color: '#fff', height: '240px', width: '100%', background: 
                                    'url(http://www.compuconsultations.org/return_result.png) center / cover'}} ></CardTitle>
                                    <CardText style={{height: '150px'}}>
                                    <div className="the-project-title"><p>Return Result</p></div>
                                    A terminal application designed in Ruby that was designed to select a random person in a class and keep score on how many times that person had been selected.
                                    <br/><br/>
                                    <div style={{ textAlign: 'center' }}><strong>Ruby | RubyGems</strong></div>
                                    </CardText>
                                    <CardActions border>
                                    <a href="https://github.com/ChrisR32/get-result" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub Repository</Button></a>
                                    <a href="https://youtu.be/4p2OMFIPKXQ" style={{ textAlign: 'right', paddingLeft: '16px' }} rel="noopener noreferrer" target="_blank">
                                        <Button colored>View Video</Button></a>
                                    </CardActions>
                                </Card>
                                </div>

                                <div style={{padding: '20px'}}> 
                                <Card shadow={5} style={{minWidth: '650', margin: 'auto'}}>
                                    <CardTitle className="the-project-title" style={{ color: '#fff', height: '240px', width: '100%', background: 
                                    'url(http://www.compuconsultations.org/unraidssh.png) center / cover'}} ></CardTitle>
                                    <CardText style={{height: '150px'}}>
                                    <div className="the-project-title"><p>UnRaid SSH Dashboard</p></div>
                                    This is a terminal application designed in Ruby that allows the user to SSH into their UnRaid NAS server to monitor system status all by using standard terminal commands.
                                    <br/><br/>
                                    <div style={{ textAlign: 'center' }}><strong>Ruby | RubyGems</strong></div>
                                    </CardText>
                                    <CardActions border>
                                    <a href="https://github.com/ChrisR32/unraid_ssh_dashboard/" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub Repository</Button></a>
                                    <a href="https://youtu.be/CQ_ZqdHkd5U" style={{ textAlign: 'right', paddingLeft: '16px' }} rel="noopener noreferrer" target="_blank">
                                        <Button colored>View Video</Button></a>
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