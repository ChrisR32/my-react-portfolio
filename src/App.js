import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
<div style={{height: '1000px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className="header-color" title={<span><strong>Christopher Morris</strong></span>} transparent scroll>
            <Navigation>
                <Link id="content-desktop" to="/">Home</Link>
                <Link id="content-desktop" to="/resume">Resume</Link>
                <Link id="content-desktop" to="/projects">Projects</Link>
                <Link id="content-desktop" to="/contact">Contact</Link>       
            </Navigation>
        </Header> 
        <Drawer>
            
            <Navigation>
              
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>  
            </Navigation>
          
        </Drawer>
         
        <Content>
          <div className="page-content" />
          
          <Main/>
         


          <footer className="profile-footer"><p>&copy; Copyright 2020 Christopher Morris</p></footer>

        </Content>
  
    </Layout>

</div>

  );
}

export default App;
