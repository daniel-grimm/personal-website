import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { useMediaQuery } from 'react-responsive';
import Topbar from '../components/Topbar/Topbar';
import { Flex } from './MainLayout.style';

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  console.log('isDesktop?', isDesktopOrLaptop)

  return (
    <>
      <Flex>
        {isDesktopOrLaptop ? <Sidebar /> : <Topbar />}
        {children}
      </Flex>

    </>

  );
}

export default MainLayout;
