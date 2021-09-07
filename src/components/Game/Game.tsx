export interface IGameProps {
  name: string;
  icon: string;
  ref: string;
}

const Game = ({ name, icon, ref }: IGameProps) => {
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
