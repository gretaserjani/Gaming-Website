import axios from 'axios';


export const fetchGames = async () => {
  try {
    const response = await axios.get(`https://api.rawg.io/api/platforms?key=${'dc0bd1d35e8047cb974d8c9c9de4d519'}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};


export const fetchSingleGame = async (id) => {
  try {
    const response = await axios.get(`https://api.rawg.io/api/platforms/${'dc0bd1d35e8047cb974d8c9c9de4d519'}${id}`);

    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

