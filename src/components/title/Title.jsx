import React, { useContext } from "react";
import Card from "../card/Card";
import { CharactersContext } from "../../context/CharactersContextComponent";
import "./title.css";

export default function Title() {
  // Получаем данные и функции из провайдер Context
  const {
    characters,
    toggleLike,
    removeCard,
    showLikedOnly,
    toggleShowLikedOnly,
  } = useContext(CharactersContext);

  return (
    <div className="title">
      <div className="title__button">
        <button onClick={toggleShowLikedOnly}>
          {showLikedOnly ? "Show All" : "Show Liked Only"}
        </button>
      </div>
      <div className="title__flex">
        {characters
          .filter(
            (character) =>
              !showLikedOnly || (showLikedOnly && character.isLiked)
          )
          .map((character) => (
            <Card
              key={character.id}
              character={character}
              toggleLike={toggleLike}
              removeCard={removeCard}
            />
          ))}
      </div>
    </div>
  );
}
