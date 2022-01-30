import Data from './data';
import MockData from './mockData';
import IData from './IData';

export const data: Promise<IData> = new MockData()
  .getConfig()
  .then(config => (config.server.shouldMock ? new MockData() : new Data()));
