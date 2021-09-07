import { useQuery } from 'react-query';
import GameApi from '../api/routes/GameApi';
import { IGameModel } from '../models/Game.model';

const useLoadGame = (id: string): IGameModel | undefined => {
  const { data } = useQuery<IGameModel, Error>([GameApi.name, 'get'], () => GameApi.get(id), {
    enabled: !!id,
  });

  return data;
};

export default useLoadGame;

