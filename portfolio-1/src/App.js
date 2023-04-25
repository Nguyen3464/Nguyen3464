import React from "react"
import NavigationBar from "./components/NavigationBar";
import Section1 from "./components/Section1"
import Projects from "./components/Projects"
import Languages from "./components/Languages"
import Carousel from "react-elastic-carousel";

import './App.css';

const App = () => {

  return(
    <>
      <NavigationBar />
      <Section1 />
      <Projects />
      <Carousel>
      <Languages  />
      </Carousel>
     
      
    </>
  )
}

export default App;
