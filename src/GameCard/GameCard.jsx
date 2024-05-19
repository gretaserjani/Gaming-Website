import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const GameCard = ({gameDetails}) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const navigate = useNavigate();
  const { characterId } = useParams();

  const buttonLabel = showMoreInfo ? 'Hide info' : 'Show more';

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={gameDetails?.image_background}
        title={gameDetails?.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {gameDetails?.name}
        </Typography>
        {
          !characterId ? (
            <Button 
              variant="contained"
              onClick={() => navigate(`/games/${gameDetails.id}`)}
            >
              View more
            </Button>
          ) : (
            <div>
                <Button 
                variant="outlined"
                onClick={() => setShowMoreInfo(!showMoreInfo)}
              >
                {buttonLabel}
              </Button>
              <Button 
                variant="outlined"
                onClick={() => navigate('/')}
              >
                Go back
              </Button>
            </div>
            
          )
        }
        {
          showMoreInfo && (
            <div>
              <h3>Name: {gameDetails?.name}</h3>
              <h3>Added: {gameDetails?.added}</h3>
            </div>
          )
        }
      </CardContent>
    </Card>
  );
}

GameCard.propTypes = {
  gameDetails: PropTypes.object
}

export default GameCard;