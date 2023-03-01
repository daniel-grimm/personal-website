import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { useMediaQuery } from 'react-responsive';
import Topbar from '../components/Topbar/Topbar';
import { Flex } from '../components/Flex/Flex.style';
import { Background } from './MainLayout.style';
import { Offset } from './Offset.style';

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
        <Background>
          <Flex flexDirection='row'>
            <Sidebar />
            <Offset>
              {children}
            </Offset>
          </Flex>
        </Background>}


      {/* Mobile layout */}
      {!desktopLayout &&
        <Background>
          <Flex flexDirection='column'>
            <Topbar />
            {children}
          </Flex>
        </Background>
      }
    </>
  );
}

export default MainLayout;
