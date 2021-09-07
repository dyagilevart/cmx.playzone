import { FunctionComponent } from "react";
import './Awards.scss';

const Awards: FunctionComponent = () => {
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
              <div className="title">Популярные</div>
              <div className="games-list">
                
              </div>
            </div>
    
            <div className="row">
              <div className="title">Все</div>
              <div className="games-list">
            
              </div>
            </div>
          </div>
        </div>
      );
}

export default Awards;