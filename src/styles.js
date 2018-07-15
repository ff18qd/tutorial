// Dependencies
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Colors
const DARK_BLUE = '#516789';
const DARK_BLUE_ALT = '#87ace5';
const MED_BLUE = '#84b3ff';
const LIGHT_BLUE = '#c1ecff';
const WHITE_LAYER = `rgba(255,255,255,0.4)`;

// Page
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// Header
export const Header = styled.header`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 90px;
  background: ${ MED_BLUE };
  color: white;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
  border-bottom: 5px solid rgba(0,0,0,0.7);
  h1 {
    margin-left: 30px;
    margin-right: 30px;
  }
  @media (max-width: 760px){
    font-size: 0.8em;
    span {
      display: inline-block;
    }
  }
`;

// Main Area (Everything South of the Header)
export const Main = styled.div`
  display: flex;
  height: calc(100vh - 90px);
`;

// SideBar

export const SideBarWrapper = styled.div`
  width: 320px;
  background: ${ DARK_BLUE };
  color: white;
  box-sizing: border-box;
  padding-top: 30px;
  border-right: solid ${ WHITE_LAYER } 10px;
  ul {
    &:nth-child(1){
      margin-top: -15px;
    }
  }
  li {
    display: block;
    padding: 15px 30px;
    cursor: pointer;
    position: relative;
    transform-origin: bottom;
    &:hover span {
      border-bottom: 1px solid rgba(255,255,255,1);
    }
    &:hover {
      background-image: linear-gradient(
        ${ WHITE_LAYER },
        ${ WHITE_LAYER });
    }
  }
`;

export const SideBarText = styled.span`
  border-bottom: 1px solid ${ WHITE_LAYER };
  display: inline-block;
  line-height: 0.95;
  transform-origin: top left;
  transition: transform 0.1s;
  text-shadow: 1px 1px 2px black;
`;

export const StyledLink = styled(NavLink)`
  &.active {
    li {
      filter:drop-shadow(-2px 3px 1px rgba(0,0,0,0.3));
      span {
        border-bottom: 1px solid rgba(255,255,255,1);
      }
      &::before {
        content: '';
        left:0;
        top: 0;
        z-index: -1;
        animation: slide-in 0.2s;
        display: block;
        position: absolute;
        width: 100%;
        height: calc(100%);
        background: ${ DARK_BLUE_ALT };
      }
      &::after {
        content: '';
        display: block;
        position: absolute;
        right: -10px;
        top: 0px;
        width: 10px;
        height: calc(100%);
        transform: translateY(4px) skewY(40deg);
        animation: skew-in 0.3s 0.2s forwards;
      }
    }
  }
`;

// Workspace
export const Workspace = styled.div`
  flex: 1;
  background: ${LIGHT_BLUE};
  background-image:
    linear-gradient(to right,
      rgba(0,0,0,0.1) 0px,
      transparent 5px,
      transparent 0);
`;

// Page Template
export const PageHeader = styled.h2`
  padding: 30px;
`;

export const PageDescription = styled.p`
`;
