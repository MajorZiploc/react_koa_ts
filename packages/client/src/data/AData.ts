import { AppSettings, Movie } from '../models';
import IData from './IData';

export default abstract class AData implements IData {
  private _config: Promise<AppSettings>;

  constructor() {
    const url = `${process.env.PUBLIC_URL}appsettings.json`;
    this._config = fetch(url, {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async r => {
      return await r.json();
    });
  }

  getConfig(): Promise<AppSettings> {
    return this._config;
  }

  abstract getMovies(): Promise<Movie[]>;
}
