import React from "react";
import "./card.css";
import sprite from "../../assets/img/sprite.svg";

export default function Card({ character, toggleLike, removeCard }) {
  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__inner-img">
          <img src={character.image} alt={character.name} />
        </div>
        <div className="card__inner-text-icon">
          <div className="card__inner-text">
            <p>{character.name}</p>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
          </div>
          <div className="card__inner-icon">
            <svg
              className={`card__icon-like ${
                character.isLiked ? "card__icon-like--liked" : ""
              }`}
              onClick={() => toggleLike(character.id)}
            >
              <use href={`${sprite}#like`}></use>
            </svg>
            <svg
              className="card__icon-del"
              onClick={() => removeCard(character.id)}
            >
              <use href={`${sprite}#delete`}></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
