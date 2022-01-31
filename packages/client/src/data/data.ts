import { Movie } from '../models';
import AData from './AData';

export default class Data extends AData {
  async getMovies(): Promise<Movie[]> {
    const url = `${process.env.APP_PUBLIC_URL}:${process.env.SERVER_PORT}/movies`;
    return fetch(url, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async r => {
      return await r.json();
    });
  }
}
