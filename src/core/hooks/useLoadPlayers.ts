import { IPlayerModel } from './../models/Player.model';
import { useQuery } from 'react-query';
import PlayerApi from '../api/routes/PlayerApi';

const useLoadPlayers = (): Array<IPlayerModel> => {
  const {data} = useQuery<Array<IPlayerModel>, Error>([PlayerApi.name, 'get'], () => PlayerApi.get());

  return data || [];
};

export default useLoadPlayers;

  