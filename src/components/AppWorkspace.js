import React from 'react';
import styled from 'styled-components';
import FakeButtons from './FakeButtons';
import ScrollableAnchor from 'react-scrollable-anchor'

const AppWorkspace = () =>
  <ScrollableAnchor id="MyComponent">
    <AppWorkspaceWrapper>
      <ToolBar>
        <FakeButtons/>
        <Title>My Component</Title>
      </ToolBar>
    </AppWorkspaceWrapper>
  </ScrollableAnchor>

export default AppWorkspace;

const AppWorkspaceWrapper = styled.div`
  width: calc(100% - 60px);
  margin: 0 auto;
  margin-bottom: 30px;
  height: 400px;
  background-color: rgb(99, 99, 99);
  border-radius: 8px;
  position: relative;
  box-shadow: 0 0 4px 1px rgba(0,0,0,0.1);
`;

const ToolBar = styled.div`
  position: absolute;
  height: 30px;
  width: 100%;
  background:
    linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.4)),
    linear-gradient(to top, #ADA996, #F2F2F2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    position: absolute;
    top: 5px;
    left: 0;
    filter: drop-shadow(0 0 1px rgba(0,0,0,0.2));
  }
`;

const Title = styled.span`
  user-select: none;
  font-size: 0.9em;
`
