import React from 'react';

type ContextProps = { 
    sideMenuActivated: boolean,
    setSideMenuActivated: React.Dispatch<React.SetStateAction<boolean>>,
  };

const PageContext = React.createContext<Partial<ContextProps>>({});
 
export default PageContext;
