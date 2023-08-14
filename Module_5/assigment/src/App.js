import React from 'react';
import Headers from './components/client/HeaderApp';
import NavbarApp from './components/client/NavbarApp';
import Content from './components/client/ContentApp';
import Task from './components/client/TaskbarApp';
import SimpleSlider from './components/client/SliderApp';



function App() {
  return (
    <>
      <Task />
      <Headers />
      <NavbarApp />
      <Content />
      <SimpleSlider />
    </>
  );
}

export default App;
