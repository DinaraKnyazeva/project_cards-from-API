import React, { useContext } from "react";
import Card from "../card/Card";
import { CharactersContext } from "../../context/CharactersContextComponent";
import "./title.css";

export default function Title() {
  const { characters } = useContext(CharactersContext);

  return (
    <div className="title">
      <div className="title__flex">
        {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
