import { FunctionComponent } from 'react';
import './Main.scss';

const Main: FunctionComponent = () => {

  
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
          <div className="games-list"></div>
        </div>

        <div className="row">
          <div className="title">
            <span>Все</span> <span className="action">посмотреть все</span>
          </div>
          <div className="games-list"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
