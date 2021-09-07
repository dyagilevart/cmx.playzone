import { IGameModel } from './../../models/Game.model';
import AbstractCrud from '../abstractCrud';

const API_PATH = '/game';

class OrgsApi extends AbstractCrud<IGameModel> {
  constructor() {
    super(API_PATH);
  }

  public async getPopular(): Promise<IGameModel[]> {
    const url = this.url;

    return this.instance.get(url + '/popular').then(response => {
      return response?.data;
    });
  }
}

export default new OrgsApi();