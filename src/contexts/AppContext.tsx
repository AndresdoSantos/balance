import React, { createContext, ReactNode, useCallback, useState } from 'react';

type Navigate = 'profile' | 'menu';

type AppContextData = {
  navigate(routeName: Navigate): void;
  route: Navigate;
};

export const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<Navigate>('menu');

  const navigate = useCallback((routeName: Navigate): void => {
    setRoute(routeName);
  }, []);

  return (
    <AppContext.Provider value={{ navigate, route }}>
      {children}
    </AppContext.Provider>
  );
}
