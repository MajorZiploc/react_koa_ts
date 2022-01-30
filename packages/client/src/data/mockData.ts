import * as mocks from '../mocks';
import { Movie } from '../models';
import AData from './AData';

export default class MockData extends AData {
  async getMovies(): Promise<Movie[]> {
    return mocks.movies;
  }
}
