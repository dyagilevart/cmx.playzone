import { useQuery } from 'react-query';
import GameApi from '../api/routes/GameApi';
import { IGameModel } from './../models/Game.model';

const useLoadGames = (): Array<IGameModel> => {
  const {data} = useQuery<Array<IGameModel>, Error>([GameApi.name, 'getAll'], () => GameApi.getAll());

  return data || [];
};

export default useLoadGames;

  