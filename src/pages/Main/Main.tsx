import { FunctionComponent } from 'react';
import './Main.scss';
import useLoadPopularGames from '../../core/hooks/useLoadPopularGames';
import useLoadGames from '../../core/hooks/useLoadGames';

import Game from '../../components/Game/Game';

const Main: FunctionComponent = () => {
  const popularGames = useLoadPopularGames();
  const allGames = useLoadGames();

  return (
    <div className="main">
      <div className="header">
        <div className="col">
          <div className="title">Привет 👋</div>
          <div className="description">Во что бы ты хотел сыграть сегодня?</div>
        </div>
      </div>
      <div className="board">
        <div className="row">
          <div className="title">Популярные</div>
          <div className="games-list">
            {popularGames.length ? (
              popularGames.map((item) => (
                <Game
                  key={item.id}
                  name={item.title}
                  icon={item.logo}
                  link={item.id.toString()}
                ></Game>
              ))
            ) : (
              <div>нет данных</div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="title">
            <span>Все</span> <span className="action">посмотреть все</span>
          </div>
          <div className="games-list">
            {allGames.length ? (
              allGames.map((item) => (
                <Game
                  key={item.id}
                  name={item.title}
                  icon={item.logo}
                  link={item.id.toString()}
                ></Game>
              ))
            ) : (
              <div>нет данных</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
