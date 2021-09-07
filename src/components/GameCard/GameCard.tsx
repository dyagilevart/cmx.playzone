import { Link } from 'react-router-dom';
import './GameCard.scss';

export interface IGameProps {
  name?: string;
  icon?: string;
  link?: string;
}

const GameCard = ({ name, icon, link }: IGameProps) => {
  let card = (
    <div className="game-card">
      <div className="logo">
        <img src={icon} alt={name} />
      </div>
      {name && <div className="name">{name}</div>}
    </div>
  );

  return (
    <>{link ? <Link to={link}>{card}</Link> : <>{card}</>}</>
  );
};

export default GameCard;
