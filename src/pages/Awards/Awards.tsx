import { FunctionComponent } from 'react';
import GameCard from '../../components/GameCard/GameCard';
import useLoadGames from '../../core/hooks/useLoadGames';
import './Awards.scss';

const Awards: FunctionComponent = () => {

    const allGames = useLoadGames();

  return (
    <div className="awards">
      <div className="header">
        <div className="col">
          <div className="title">Результаты 🏆</div>
          <div className="description">Время прославиться!</div>
        </div>
      </div>
      <div className="board">
        <div className="row">
          <div className="games-list">
            {allGames.length ? (
              allGames.map((item, index) => (
                <GameCard
                  key={item.id}
                  name={item.title}
                  icon={item.logo}
                  link={'/playzone/award/' + item.id.toString()}
                ></GameCard>
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

export default Awards;
