import React from 'react';

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

  return (
    <div>
      <div>
        Layout?
      </div>
      <main>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;