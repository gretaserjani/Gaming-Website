import { useEffect, useState } from 'react'
import { fetchGames } from '../api';
import GameCard from '../GameCard/GameCard';
import styles from './styles.module.css';


const GamesList = () => {
  const [games, setGames] = useState();

  useEffect(() => {
    const getGames = async () => {
      const characters = await fetchGames();

      setGames(characters);
    };

    if (!games) {
      getGames();
    }
  }, [games]);

  return (
    <>
      <h1 className={styles.container}>Game's List</h1>
      <div className={styles.container}>
        {
          games?.map((game) => (
            <GameCard
              key={game.id}
              gameDetails={game}
            />
          ))
        }
      </div>
    </>
  )
}

export default GamesList;
