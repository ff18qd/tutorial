import React from 'react';
import { SideBarText, StyledLink } from '../styles';

const SideBarItem = (props) =>
  <StyledLink to={ props.to }>
     <li>
         <SideBarText>{ props.children }</SideBarText>
     </li>
   </StyledLink>

export default SideBarItem;
