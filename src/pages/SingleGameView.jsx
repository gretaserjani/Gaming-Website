import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react';
import {fetchSingleGame} from '../api';
import GameCard from '../GameCard/GameCard';
import Header from '../Header/Header';

const SingleGameView = () => {
    
  const { characterId } = useParams()

  const [singleGame, setSingleGame] = useState();

  useEffect(() => {
    const getSingleGame = async () => {
      const games = await fetchSingleGame(characterId);

      setSingleGame(games);
    };

    if (!singleGame) {
      getSingleGame();
    }
  }, [characterId, singleGame]);
console.log(singleGame);
  return (
    <div>
        <Header/>
      <GameCard
        gameDetails={singleGame}
      />
    </div>
  )
}

export default SingleGameView;