import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Welcome } from '../../assets/hello.svg';
import './Hello.scss';

const Hello: FunctionComponent = () => {
  return (
    <div className="hello">
      <div className="banner">
        <Welcome />
      </div>
      <div className="header">
        <span>Разнообразь свой рабочий день</span>
      </div>
      <div className="description">
        <span>Брось вызов соседу и заведи новых друзей</span>
      </div>
      <div className="footer">
        <Link to="/playzone">
          <button className="button">Играть</button>
        </Link>
      </div>
    </div>
  );
};

export default Hello;
