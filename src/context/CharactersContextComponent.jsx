import { createContext, useState, useEffect } from "react";
import Get from "./Get";
export const CharactersContext = createContext();

export function CharactersContextComponent({ children }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharactersFromServer();
  }, []);

  async function fetchCharactersFromServer() {
    const charactersFromServer = await Get.getCharacters();
    setCharacters(charactersFromServer);
  }

  return (
    <CharactersContext.Provider value={{ characters }}>
      {children}
    </CharactersContext.Provider>
  );
}
