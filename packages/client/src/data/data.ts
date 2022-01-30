import { Movie } from '../models';
import AData from './AData';

export default class Data extends AData {
  async getMovies(): Promise<Movie[]> {
    const config = await this.getConfig();
    const url = `${config.server.url}/movies`;
    return fetch(url, {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async r => {
      return await r.json();
    });
  }
}
