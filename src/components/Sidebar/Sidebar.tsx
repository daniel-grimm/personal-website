import React from 'react';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import { Bar, ListItem } from './Sidebar.style';
import { FaHouseUser, FaTools, FaLink } from 'react-icons/fa';
import { Link } from '../TextStyles/TextStyles.style';

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
                <Link onClick={() => {
                    setIsProjects(false)
                    setIsLinks(false)
                    setIsHome(true)
                }}>
                    <ListItem>
                        <FaHouseUser />
                        Home
                    </ListItem>
                </Link>
                <Link onClick={() => {
                    setIsHome(false)
                    setIsLinks(false)
                    setIsProjects(true)
                }}>
                    <ListItem>
                        <FaTools />
                        Projects
                    </ListItem>
                </Link>
                <Link onClick={() => {
                    setIsProjects(false)
                    setIsHome(false)
                    setIsLinks(true)
                }}>
                    <ListItem>
                        <FaLink />
                        Links
                    </ListItem>
                </Link>
            </Bar>
        </>
    );
}

export default Sidebar;
