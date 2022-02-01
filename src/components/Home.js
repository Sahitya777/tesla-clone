import React from 'react';
import styled from "styled-components"
import Section from "./Section"
function Home() {
  return <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtntext="Custom order"
        rightBtnText="Exsisting inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtntext="Custom order"
        rightBtnText="Exsisting inventory"  
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtntext="Custom order"
        rightBtnText="Exsisting inventory"
      />
      <Section
          title="Model X"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-X.jpg"
          leftBtntext="Custom order"
          rightBtnText="Exsisting inventory"
      />
      <Section
          title="Lowest Cost Solar Panles in America"
          description="Money-back guaranteee"
          backgroundImg="solar-panel.jpg"
          leftBtntext="Order now"
          rightBtnText="learn more"
      />
      <Section
          title="Solar for new Roofs"
          description="Solar Roof Cost Less Than a New Roof Plus Solar Panels"
          backgroundImg="solar-roof.jpg"
          leftBtntext="Order now"
          rightBtnText="learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtntext="Shop now"
      />
  </Container>;
}

export default Home;

const Container=styled.div`
    height: 100vh;
`
