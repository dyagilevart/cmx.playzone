import { useQuery } from 'react-query';
import AwardApi from '../api/routes/AwardApi';
import { IAwardModel } from '../models/Award.model';

const useLoadGameTop = (id: string): Array<IAwardModel> => {
  const { data } = useQuery<Array<IAwardModel>, Error>([AwardApi.name, 'getTopByGameId'], () => AwardApi.getTopByGameId(id), {
    enabled: !!id,
  });

  return data || [];
};

export default useLoadGameTop;

