import React from 'react';

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

  return (
    <div>
      {children}
    </div>
  );
}

export default MainLayout;