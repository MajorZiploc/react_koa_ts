import React from 'react';
import { IData } from '../data';

const DataContext = React.createContext<IData.default | null>(null);
export const DataProvider = DataContext.Provider;
export default DataContext;
