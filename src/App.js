// Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Styled Components
import { PageWrapper, Header, Main, WorkspaceWrapper } from './styles';

// Components
import SideBar from './components/SideBar';
import PageTemplate from './components/PageTemplate';

// Page Data & Routes
import pages from './page-data';

export default class App extends Component {
  render() {
    return (
        <PageWrapper>
            <Header>
              <h1><span>Styled Components &</span> <span>Atomic Design Tutorial</span></h1>
            </Header>
            <Router>
              <Main>
                <SideBar pages={pages} />
                <WorkspaceWrapper className="workspace-wrapper">
                  {
                    /* Dynamically Generate Routes with Page Component Template and pass the page object information along as props */
                    pages.map(page => {
                      return  <Route key={page.id} path={page.route} component={()=><PageTemplate {...page}/>}/>
                    })
                  }
                </WorkspaceWrapper>
              </Main>
            </Router>
        </PageWrapper>
    );
  }
}
