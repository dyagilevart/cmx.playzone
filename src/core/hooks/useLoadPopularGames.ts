import { useQuery } from 'react-query';
import GameApi from '../api/routes/GameApi';
import { IGameModel } from '../models/Game.model';

const useLoadPopularGames = (): Array<IGameModel> => {
  const {data} = useQuery<Array<IGameModel>, Error>([GameApi.name, 'getPopular'], () => GameApi.getPopular());

  return data || [];
};

export default useLoadPopularGames;

  