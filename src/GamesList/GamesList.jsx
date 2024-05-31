// import { useEffect, useState } from 'react'
// import { fetchGames } from '../api';
// import GameCard from '../GameCard/GameCard';
// import styles from './styles.module.css';


// const GamesList = () => {
//   const [games, setGames] = useState();

//   useEffect(() => {
//     const getGames = async () => {
//       const characters = await fetchGames();

//       setGames(characters);
//     };

//     if (!games) {
//       getGames();
//     }
//   }, [games]);

//   return (
//     <>
//       <h1 className={styles.container}>Game's List</h1>
//       <div className={styles.container}>
//         {
//           games?.map((game) => (
//             <GameCard
//               key={game.id}
//               gameDetails={game}
//             />
//           ))
//         }
//       </div>
//     </>
//   )
// }

// export default GamesList;






// import { useEffect, useState } from 'react';
// import { fetchGames } from '../api';
// import GameCard from '../GameCard/GameCard';
// import styles from './styles.module.css';

// const GamesList = () => {
//   const [games, setGames] = useState([]);
//   const [sortByGenre, setSortByGenre] = useState(false);

//   useEffect(() => {
//     const getGames = async () => {
//       const gamesData = await fetchGames();
//       // Sort games by name initially
//       const sortedGames = gamesData.sort((a, b) => a.name.localeCompare(b.name));
//       setGames(sortedGames);
//     };

//     getGames();
//   }, []);

//   const handleSortByGenre = () => {
//     // Toggle sorting by genre
//     setSortByGenre(!sortByGenre);
//     if (!sortByGenre) {
//       // Sort by genre
//       const sortedGames = [...games].sort((a, b) => a.slug.localeCompare(b.slug));
//       setGames(sortedGames);
//     } else {
//       // Sort by name if already sorted by genre
//       const sortedGames = [...games].sort((a, b) => a.name.localeCompare(b.name));
//       setGames(sortedGames);
//     }
//   };

//   return (
//     <>
//       <h1 className={styles.container}>Game's List</h1>
//       <button onClick={handleSortByGenre}>
//         {sortByGenre ? "Sort by Name" : "Sort by Genre"}
//       </button>
//       <div className={styles.container}>
//         {games.map((game) => (
//           <GameCard
//             key={game.id}
//             gameDetails={game}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default GamesList;



import { useEffect, useState } from 'react';
import { fetchGames } from '../api';
import GameCard from '../GameCard/GameCard';
import styles from './styles.module.css';

const GamesList = () => {
  const [games, setGames] = useState([]);
  const [sortByGenre, setSortByGenre] = useState(false);

  useEffect(() => {
    const getGames = async () => {
      const gamesData = await fetchGames();
      setGames(gamesData);
    };

    getGames();
  }, []);

  const handleSortByName = () => {
    const sortedGames = [...games].sort((a, b) => a.name.localeCompare(b.name));
    setGames(sortedGames);
    setSortByGenre(false);
  };

  const handleSortByGenre = () => {
    const sortedGames = [...games].sort((a, b) => a.slug.localeCompare(b.genre));
    setGames(sortedGames);
    setSortByGenre(true);
  };

  return (
    <>
      <h1 className={styles.container}>Game's List</h1>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={handleSortByName}>Sort by Name</button>
        <button className={styles.button} onClick={handleSortByGenre}>Sort by Genre</button>
      </div>
      <div className={styles.container}>
        {games.map((game) => (
          <GameCard
            key={game.id}
            gameDetails={game}
          />
        ))}
      </div>
    </>
  );
};

export default GamesList;