import React, { useEffect, useState } from 'react';
import { fetchGames } from '../api';
import './CollectionPage.css';

const CollectionPage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const gamesData = await fetchGames();
        setGames(gamesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="collection-page">
      <h1>Game Categories </h1>
      <div className="card-container">
        {games.map((game) => (
          <div key={game.id} className="card">
            <img src={game.image_background} alt={game.name} className="card-image" />
            <div className="card-content">
              <h3>{game.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
