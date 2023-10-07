export default class Get {
  static async getCharacters() {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");

      if (response.status !== 200) {
        throw new Error("Failed to fetch characters from RickAndMortyAPI");
      }

      const characterData = await response.json();

      return characterData.results;
    } catch (e) {
      console.error(e);
      return [];
    }
  }
}
