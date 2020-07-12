import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
      return(
<div className="contact-body">
<Grid className="contact-grid">
    <Cell col={6}>
        <img
        src="http://www.compuconsultations.org/profile-square.png"
        alt="Christopher Morris"
        style={{height: "280px", border: "solid 10px #fe8c00", borderRadius: "20px", marginTop: "2rem" }}
        />
        <p style={{ width: '88%', margin: 'auto', paddingTop: '1em' }}>I’m Chris from the Blue Mountains and I’m looking to start my career in the Tech Industry. I love the challenge and feeling of accomplishment that I get from working out various programming challenges. Outside of work I enjoy tinkering with cars and learning from and restoring classic computers.</p>
    </Cell>
    <Cell col={6}>
        <h2>Contact Me</h2>
        <hr/>
        <div className="contactList">
            <List>
                <ListItem>
                <ListItemContent style={{fontSize: '3.5vw', fontFamily: 'Anton', color: 'white' }}>
                <a href="tel:0457298815" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                        <i className="fa fa-phone-square" aria-hidden="true" style={{ paddingRight: '20px', fontSize: '3.9vw' }}/>
                        0457298815</a>
                    </ListItemContent>
                </ListItem>
                <ListItem>
                <ListItemContent style={{fontSize: '3.5vw', fontFamily: 'Anton', color: 'white' }}>
                <a href="mailto:morriscnm@me.com" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                <i className="fa fa-envelope" aria-hidden="true" style={{ paddingRight: '20px', fontSize: '3.9vw' }}/>
                        morriscnm@me.com</a>
                    </ListItemContent>
                </ListItem>
                <ListItem>
                <ListItemContent style={{fontSize: '3.5vw', fontFamily: 'Anton', color: 'white' }}>
                        <a href="skype:live:morriscnm?chat" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                        <i className="fa fa-skype" aria-hidden="true" style={{ paddingRight: '20px', fontSize: '3.9vw' }}/>
                        live:morriscnm</a>
                    </ListItemContent>
                </ListItem>
                <ListItem>
                <ListItemContent style={{fontSize: '8vw', fontFamily: 'Anton' }}>

     
                              <a href="https://www.linkedin.com/in/chris-morris-r32/" rel="noopener noreferrer" target="_blank" style={{ paddingRight: '20px', paddingLeft: '20px' }}>
                                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                              </a>
                              <a href="https://github.com/ChrisR32" rel="noopener noreferrer" target="_blank" style={{ paddingRight: '20px' }}>
                                  <i className="fa fa-github-square" aria-hidden="true" />
                              </a>
                              <a href="https://medium.com/@chrismorris_82249" rel="noopener noreferrer" target="_blank" style={{ paddingRight: '20px' }}>
                                  <i className="fa fa-medium" aria-hidden="true" />
                              </a>
                              <a href="https://twitter.com/Chris_SW_DEV" rel="noopener noreferrer" target="_blank">
                                  <i className="fa fa-twitter-square" aria-hidden="true" />
                              </a>
                
                    </ListItemContent>
                </ListItem>
            </List>
        </div>
    </Cell>
</Grid>
</div>
        )
      }
  }

export default Contact;