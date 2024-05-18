import axios from 'axios';

export const fetchGames = async () => {
  try {
    const response = await axios.get('https://api.rawg.io/api/games/3');

    return response.data;
  } catch (error) {
    console.error(error);
  }
};


