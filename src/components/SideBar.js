import React from 'react';
import { SideBarWrapper } from '../styles';
import SideBarItem from './SideBarItem';

 const SideBar = ({pages}) =>
  <SideBarWrapper>
    <ul>
      { pages.map((page,index)=>
        <SideBarItem key={index} to={page.route}>{page.title}</SideBarItem>
      )}
    </ul>
  </SideBarWrapper>

export default SideBar;
