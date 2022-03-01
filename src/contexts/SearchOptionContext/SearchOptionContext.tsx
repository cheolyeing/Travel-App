import React, {createContext, useContext, useState} from 'react';

export type SearchOptionContextType = {
  area?: string;
  setArea?: (area: string) => void;
  category?: string;
  setCategory?: (category: string) => void;
};

const SearchOptionContext = createContext<SearchOptionContextType>({});

export const SearchOptionContextProvider = ({children}: {children?: any}) => {
  const [area, setArea] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  return <SearchOptionContext.Provider value={{area, setArea, category, setCategory}}>{children}</SearchOptionContext.Provider>;
};

export const useSearchOptioncontext = () => useContext(SearchOptionContext);
