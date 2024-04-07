import { FC, createContext, useContext, useState } from 'react';

export type Page =
  | 'intro'
  | 'about'
  | 'skills'
  | 'resume'
  | 'projects'
  | 'contact';

interface PortfolioContextType {
  page: Page;
  updatePage: React.Dispatch<React.SetStateAction<Page>>;
}

const initialState: PortfolioContextType = {
  page: 'intro',
  updatePage: () => {},
};

const PortfolioContext = createContext<PortfolioContextType>(initialState);

const PortfolioContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [page, setPage] = useState<Page>(initialState.page);

  const value = {
    page,
    updatePage: setPage,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error(
      'usePortfolioContext must be used within a PortfolioContextProvide'
    );
  }
  return context;
};

export default PortfolioContextProvider;
