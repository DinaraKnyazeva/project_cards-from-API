//для запросов данных о персонажах
export default class Get {
  // Статис. асинхронный метод для получения данных из апи
  static async getCharacters() {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      // Если ответ не ок, то выводим ошибку
      if (response.status !== 200) {
        throw new Error("Failed to fetch characters from RickAndMortyAPI");
      }
      //получаем json ответ:
      const characterData = await response.json();
      // Возвращаем данные о персонажах в документации results
      return characterData.results;
    } catch (e) {
      console.error(e);
      // В случае ошибки возвращаем пустой массив
      return [];
    }
  }
}
