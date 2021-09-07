import AbstractCrud from '../abstractCrud';

const API_PATH = '/award';

class AwardApi extends AbstractCrud<any> {
  constructor() {
    super(API_PATH);
  }

  public async getTopByGameId(id: string): Promise<any[]> {
    const url = this.url;

    return this.instance.get(url + '/top/' + id).then(response => {
      return response?.data;
    });
  }
}

export default new AwardApi();