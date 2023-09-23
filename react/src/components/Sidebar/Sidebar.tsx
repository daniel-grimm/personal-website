import React from 'react';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import { Bar } from './Sidebar.style';
import { FaHouseUser, FaTools, FaLink } from 'react-icons/fa';
import { SidebarButton } from '../TextStyles/TextStyles.style';

export interface SidebarProps {
    setIsHome: React.Dispatch<React.SetStateAction<boolean>>
    setIsProjects: React.Dispatch<React.SetStateAction<boolean>>
    setIsLinks: React.Dispatch<React.SetStateAction<boolean>>
}

export const Sidebar: React.FC<SidebarProps> = ({ setIsHome, setIsProjects, setIsLinks }) => {

    return (
        <>
            <Bar>
                <ProfilePicture />
                <SidebarButton
                    height='4rem'
                    onClick={() => {
                        setIsProjects(false)
                        setIsLinks(false)
                        setIsHome(true)
                    }
                    }>

                    <FaHouseUser />
                    Home
                </SidebarButton>
                <SidebarButton
                    height='4rem'
                    onClick={() => {
                        setIsHome(false)
                        setIsLinks(false)
                        setIsProjects(true)
                    }
                    }>

                    <FaTools />
                    Projects

                </SidebarButton>
                <SidebarButton
                    height='4rem'
                    onClick={() => {
                        setIsProjects(false)
                        setIsHome(false)
                        setIsLinks(true)
                    }
                    }>

                    <FaLink />
                    Links
                </SidebarButton>
            </Bar>
        </>
    );
}

export default Sidebar;
