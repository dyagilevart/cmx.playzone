import AbstractCrud from '../abstractCrud';

const API_PATH = '/player';

class PlayerApi extends AbstractCrud<any> {
  constructor() {
    super(API_PATH);
  }
}

export default new PlayerApi();