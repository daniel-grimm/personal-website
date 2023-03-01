import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { useMediaQuery } from 'react-responsive';
import Topbar from '../components/Topbar/Topbar';
import { Flex } from '../components/Flex/Flex.style';
import { Background } from './MainLayout.style';
import { Offset } from './Offset.style';
import { Spacer } from '../components/Spacer/Spacer.style';

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const desktopLayout = useMediaQuery({
    query: '(min-width: 920px)'
  })

  return (
    <>
      {/* Desktop layout */}
      {desktopLayout &&
        <Background>
          <Flex flexDirection='row'>
            <Sidebar />
            <Offset>
              <Flex flexDirection='column'>
                <Spacer minHeight='0.5rem' maxHeight='0.5rem' />
                {children}
              </Flex>
            </Offset>
          </Flex>
        </Background>}


      {/* Mobile layout */}
      {!desktopLayout &&
        <Background>
          <Flex flexDirection='column'>
            <Topbar />
            <Spacer minHeight='3rem' maxHeight='3rem' />
            <Flex flexDirection='column'>
              {children}
            </Flex>
          </Flex>
        </Background>
      }
    </>
  );
}

export default MainLayout;
