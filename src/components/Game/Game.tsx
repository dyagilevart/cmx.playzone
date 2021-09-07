import './Game.scss';

export interface IGameProps {
  name: string;
  icon: string;
  link: string;
}

const Game = ({ name, icon, link }: IGameProps) => {
  const open = () => {};

  return (
    <div className="game" onClick={open}>
      <div className="logo">
        <img src={icon} alt={name} />
      </div>
      <div className="name">{name}</div>
    </div>
  );
};

export default Game;
