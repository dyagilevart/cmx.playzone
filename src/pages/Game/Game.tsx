import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import GameCard from '../../components/GameCard/GameCard';
import useLoadGame from '../../core/hooks/useLoadGame';
import './Game.scss';

const Game: FunctionComponent = () => {
  let { id } = useParams<{ id: string }>();

  const game = useLoadGame(id);

  return (
    <div className="game">
      <div className="header">
        <div className="col"></div>
      </div>
      <div className="board">
        <div className="row horizontal">
          <div className="col game-logo">
            <GameCard icon={game?.logo} />
          </div>
          <div className="col">
            <div className="title">{game?.title}</div>
            {/* <div className="players">Играют: {players.length}</div> */}
          </div>
        </div>
        <div className="row rules">
          <div className="title">Правила:</div>
          <div className="description">{game?.rules}</div>
        </div>
        <div className="row footer">
          <button className="button secondary">играть</button>
        </div>
      </div>
    </div>
  );
};

export default Game;
