import { AppSettings, Movie } from '../models';

export default interface IData {
  getConfig(): Promise<AppSettings>;

  getMovies(): Promise<Movie[]>;
}
