import { AppSettings, Movie } from '../models';
import IData from './IData';
import { join } from 'path';

export default abstract class AData implements IData {
  private _config: Promise<AppSettings>;

  constructor() {
    const url = join(__dirname, 'appsettings.json');
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
