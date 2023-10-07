import { createContext, useState, useEffect } from "react";
import Get from "./Get";

//создаем context
export const CharactersContext = createContext();

export function CharactersContextComponent({ children }) {
  // Состояние массива персонажей
  const [characters, setCharacters] = useState([]);
  const [isFilterOn, setIsFilterOn] = useState(false);
  // Состояние фильтрации (лайк/не лайк)
  const [showLikedOnly, setShowLikedOnly] = useState(false);

  // При монтировании компонента, делаем запрос за персонажами
  useEffect(() => {
    fetchCharactersFromServer();
  }, []);

  async function fetchCharactersFromServer() {
    // Получаем персонажей с сервера
    const charactersFromServer = await Get.getCharacters();
    // Добавляем дополнительные поля каждому персонажу
    const enhancedCharacters = charactersFromServer.map((character) => ({
      ...character,
      isLiked: false,
      isVisible: true,
    }));
    // Обновляем состояние персонажей
    setCharacters(enhancedCharacters);
  }

  // функция для обновления состояния лайка для конкретного персонажа
  function toggleLike(characterId) {
    console.log("toggleLike called for character ID:", characterId); //проверка
    setCharacters((prevState) =>
      prevState.map((character) =>
        character.id === characterId
          ? { ...character, isLiked: !character.isLiked }
          : character
      )
    );
  }

  // функция для удаления персонажа по его ID
  function removeCard(characterId) {
    setCharacters((prevState) =>
      prevState.filter((character) => character.id !== characterId)
    );
  }

  // функция для переключения режим отображения (все карточки или только лайкнутые)
  function toggleShowLikedOnly() {
    setShowLikedOnly((prevState) => !prevState);
  }

  function toggleFilter() {
    setIsFilterOn(!isFilterOn);
    if (!isFilterOn) {
      setCharacters((prevState) =>
        prevState.map((character) => ({
          ...character,
          isVisible: character.isLiked,
        }))
      );
    } else {
      setCharacters((prevState) =>
        prevState.map((character) => ({
          ...character,
          isVisible: true,
        }))
      );
    }
  }

  // Передаем данные и функции через провайдер Context
  return (
    <CharactersContext.Provider
      value={{
        characters,
        toggleLike,
        removeCard,
        showLikedOnly,
        toggleShowLikedOnly,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
}
