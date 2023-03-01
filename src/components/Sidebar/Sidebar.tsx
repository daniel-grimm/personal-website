import React from 'react';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import { Bar, ListItem } from './Sidebar.style';
import { FaHouseUser, FaTools, FaLink } from 'react-icons/fa';

export const Sidebar: React.FC = () => {

    return (
        <>
            <Bar>
                <ProfilePicture />
                <ListItem>
                    <FaHouseUser />
                    Home
                </ListItem>
                <ListItem>
                    <FaTools />
                    Projects
                </ListItem>
                <ListItem>
                    <FaLink />
                    Links
                </ListItem>
            </Bar>
        </>

    );
}

export default Sidebar;
