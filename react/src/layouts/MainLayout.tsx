import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Topbar from '../components/Topbar/Topbar';
import { Flex } from '../components/Flex/Flex.style';
import { Background } from './MainLayout.style';
import { Offset } from './Offset.style';
import { Spacer } from '../components/Spacer/Spacer.style';
import { useIsMobileView } from '../hooks/useIsMobileView';

export type MainLayoutProps = {
  children: React.ReactNode;
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>
  setIsProjects: React.Dispatch<React.SetStateAction<boolean>>
  setIsLinks: React.Dispatch<React.SetStateAction<boolean>>
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children, setIsHome, setIsProjects, setIsLinks }) => {
  const desktopLayout: boolean = useIsMobileView();

  return (
    <>
      {/* Desktop layout */}
      {desktopLayout &&
        <Background>
          <Flex flexDirection='row'>
            <Sidebar setIsHome={setIsHome} setIsProjects={setIsProjects} setIsLinks={setIsLinks} />
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
            <Topbar setIsHome={setIsHome} setIsProjects={setIsProjects} setIsLinks={setIsLinks} />
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
