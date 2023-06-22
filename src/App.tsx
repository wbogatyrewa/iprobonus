import React from "react";
import Header from "./components/Header/Header";
import { Container } from "./components/Container/Container";
import Bonus from "./components/Bonus/Bonus";
import { BonusContainer } from "./App.style";

function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <BonusContainer>
        <Bonus total={300} burnDate="29.03" burnAmount={250} />
      </BonusContainer>
    </>
  );
}

export default App;
