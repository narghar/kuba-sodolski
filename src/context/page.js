import React, { useContext } from 'react';

const PageContext = React.createContext();

const PageContextProvider = ({ children, allPosts = [] }) => {
  return (
    <PageContext.Provider value={{ allPosts }}>
      {children}
    </PageContext.Provider>
  )
};

const usePageContext = () => {
  return useContext(PageContext);
};

export { PageContext, PageContextProvider, usePageContext };
