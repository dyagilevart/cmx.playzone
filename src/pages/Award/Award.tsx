import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import GameCard from '../../components/GameCard/GameCard';
import UserCard from '../../components/UserCard/UserCard';
import useLoadGame from '../../core/hooks/useLoadGame';
import useLoadGameTop from '../../core/hooks/useLoadGameTop';
import './Award.scss';

const Awards: FunctionComponent = () => {
  let { id } = useParams<{ id: string }>();

  const game = useLoadGame(id);
  const top = useLoadGameTop(id);

  const getColor = (index: number): string =>
    ['gold', 'silver', 'bronze'][index];

  return (
    <div className="award">
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
        <div className="row list">
          {top &&
            top.map((item, index) => (
              <div key={item.winner} className={`${getColor(index)} award-item`}>
                <UserCard id={item.winner}  />
                <div className="game-score">{item.count}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
