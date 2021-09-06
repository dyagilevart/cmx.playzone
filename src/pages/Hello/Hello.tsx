import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Welcome } from '../../assets/hello.svg';

const Hello: FunctionComponent = () => {
  return (
    <div className="hello">
      <div className="banner">
        <Welcome />
      </div>
      <div className="header">
        <h1>Разнообразь свой рабочий день</h1>
      </div>
      <div className="description">
        <h3>Брось вызов соседу и заведи новых друзей</h3>
      </div>
      <div className="footer">
        <Link to="/playzone">
          <button>Играть</button>
        </Link>
      </div>
    </div>
  );
};

export default Hello;
