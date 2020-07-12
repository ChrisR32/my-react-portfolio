import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div className="resume-body">
        <Grid className="resume-grid">
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="http://www.compuconsultations.org/profile-square.png"
                alt="avatar"
                style={{height: '240px', borderRadius: '20px', paddingTop: '10px'}}
                 />
            

            <h2 style={{fontWeight: 'bold', paddingTop: '.4em', fontSize: '44px'}}>Christopher Morris</h2>
            <h4 style={{fontSize: '24px', marginTop: '-16px'}}>Junior Software Developer</h4>
            
            <div style={{width: '90%', margin: 'auto', paddingTop: '10px'}}>
            <p style={{fontSize: '18px'}}>I’m Chris from the Blue Mountains and I’m looking to start my career in the Tech Industry. I love the challenge and feeling of accomplishment that I get from working out various programming challenges. Outside of work I enjoy tinkering with cars and learning from and restoring classic computers.</p>
            </div></div>

           

            <div style={{textAlign: 'center', paddingTop: '10px'}}>
            <a href="tel:0457298815" rel="noopener noreferrer" target="_blank">
                                  <i className="fa fa-phone-square" aria-hidden="true" />
                              </a>
                              <a href="mailto:morriscnm@me.com" rel="noopener noreferrer" target="_blank">
                                  <i className="fa fa-envelope" aria-hidden="true" />
                              </a>
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
          <Cell className="resume-right" col={8}>
            <Cell className="resume-right-col" col={12}>
            <h2 style={{textAlign: 'center'}}>Tech Stack</h2>
                <Skills/>
                </Cell>
            
              
          <Grid className="resume-right-grid">
            <Cell className="resume-right-col-white" col={6}>
<h2 style={{textAlign: 'left'}}>Education</h2>


            <Education
              startYear={2020}
              endYear={2020}
              schoolName="Coder Academy"
              schoolDescription="DIPLOMA OF INFORMATION TECHNOLOGY (Current)"
              schoolLocation="North Sydney, NSW"
               />

               <Education
                 startYear={2008}
                 endYear={2013}
                 schoolName="Charles Sturt University"
                 schoolDescription="BA of Arts / Phycology and History (TBC)"
                 schoolLocation="Bathurst, NSW"
                  />

               <Education
                 startYear={2017}
                 endYear={2017}
                 schoolName="St John Ambulance"
                 schoolDescription="Senior First Aid"
                 schoolLocation="Penrith, NSW"
                  />

            </Cell>
            <Cell className="resume-right-col-white" col={6}>

              <h2>Work Experience</h2>

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Lead Service Advisor"
              jobDescription="BLUE MOUNTAINS MAZDA"
              jobLocation="Blue Mountains, NSW"
              />

              <Experience
                startYear={2012}
                endYear={2017}
                jobName="Store Manager"
                jobDescription="SUPERCHEAP AUTO"
                jobLocation="Blue Mountains, NSW"
                />

                <Experience
                startYear={2000}
                endYear={2012}
                jobName="Dry Goods / Duty Manager"
                jobDescription="COLES SUPERMARKETS"
                jobLocation="Blue Mountains, NSW"
                />                
             

          </Cell>
           
           </Grid>
            </Cell>
           
            
        </Grid>
      </div>
    )
  }
}

export default Resume;