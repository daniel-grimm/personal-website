import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { useMediaQuery } from 'react-responsive';
import Topbar from '../components/Topbar/Topbar';
import { Flex } from '../components/Flex/Flex.style';

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const desktopLayout = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (
    <>
      {/* Desktop layout */}
      {desktopLayout &&
        <Flex flexDirection='row'>
          <Sidebar />
          {children}
        </Flex>}

      {/* Mobile layout */}
      {!desktopLayout &&
        <Flex flexDirection='column'>
          <Topbar />
          {children}
        </Flex>}
    </>
  );
}

export default MainLayout;
