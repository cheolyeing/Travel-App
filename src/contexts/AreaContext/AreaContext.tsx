import React, {createContext, useContext, useState} from 'react';

import {DEFAULT_AREA, DEFAULT_VALUE} from './const';
import {Area, AreaContextType} from './type';

const AreaContext = createContext<AreaContextType>(DEFAULT_VALUE);

export const AreaContextProvider = ({children}: {children?: any}) => {
  const [area, setArea] = useState<Area>(DEFAULT_AREA);

  return <AreaContext.Provider value={{area, setArea}}>{children}</AreaContext.Provider>;
};

export const useAreaContext = () => useContext(AreaContext);
