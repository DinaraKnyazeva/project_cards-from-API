import React from "react";
import "./card.css";
import sprite from "../../assets/img/sprite.svg";

export default function Card({ character }) {
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
            <svg className="card__icon-like">
              <use href={`${sprite}#like`}></use>
            </svg>
            <svg className="card__icon-del">
              <use href={`${sprite}#delete`}></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
