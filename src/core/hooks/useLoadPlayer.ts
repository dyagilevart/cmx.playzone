import { IPlayerModel } from '../models/Player.model';
import { useQuery } from 'react-query';
import PlayerApi from '../api/routes/PlayerApi';

const useLoadPlayer = (id: string): IPlayerModel | undefined => {
  const {data} = useQuery<IPlayerModel, Error>([PlayerApi.name, 'getById' + id], () => PlayerApi.get(id));

  return data;
};

export default useLoadPlayer;

  