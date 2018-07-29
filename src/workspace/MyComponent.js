/*

This is the main entry point and your "workspace" as you follow along with the tutorial. The components that you import into this project will render out within the "My Component" UI set up on every page within the main tutorial screen. While you are encouraged to dive into the surrounding directories to get a feel for how the tutorial app itself has been put together (or would like to contribute), it's only necessary to edit the files within the "/workspace" directory to complete the tutorial. However, keep in mind that changing the name of MyComponent will break the app.

*/

// Dependencies
import React from 'react';
import styled from 'styled-components';

const boxStyle = { border: 'solid 1px white', margin: '10px', width: '100px' }
const BoxOfTomatoes = (props) => <div style={boxStyle}> { props.children } </div>

const MyComponent = () => (
  <div id="MyComponent">
    <BoxOfTomatoes>
      <Tomato/>
      <Tomato/>
      <Tomato/>
    </BoxOfTomatoes>
  </div>
);

const Tomato = styled.div`
  width: 25px;
  height: 25px;
  margin: 10px;
  background: tomato;
  border-radius: 50%;
`;

export default MyComponent;
