import React from "react";
import { CharactersContextComponent } from "./context/CharactersContextComponent";
import Title from "./components/title/Title";
import Header from "./components/header/Header";
import "./App.css";

export default function App() {
  return (
    <CharactersContextComponent>
      <Header />
      <Title />
    </CharactersContextComponent>
  );
}
