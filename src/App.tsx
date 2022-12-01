import { FC } from "react";
import "./App.css";
import Container from "./components/container/container";
import Header from "./components/header/header";
import Clock from "./features/clock/Clock";

const App: FC = () => {
  return (
    <Container>
      <Header title="The best FREE clock" />
      <Clock />
    </Container>
  );
};

export default App;
