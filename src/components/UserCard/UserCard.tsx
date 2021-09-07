import useLoadPlayer from '../../core/hooks/useLoadPlayer';
import './UserCard.scss';

export interface IUserProps {
  id: number;
}

const UserCard = ({ id }: IUserProps) => {
  const user = useLoadPlayer(id.toString());

  return (
    <div className="user-card">
      <div className="user-logo">{user?.name.substring(0,1)}</div>
      <div className="user-name">{user?.name}</div>

    </div>
  );
};

export default UserCard;
