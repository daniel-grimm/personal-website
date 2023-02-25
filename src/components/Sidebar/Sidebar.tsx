import React from 'react';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import { Bar, ListItem } from './Sidebar.style';
import { FaHouseUser, FaScroll, FaTools } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';

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
                    <FaScroll />
                    Resume
                </ListItem>
                <ListItem>
                    <FaTools />
                    Projects
                </ListItem>
                <ListItem>
                    <BsFillPeopleFill />
                    Family
                </ListItem>
            </Bar>
        </>

    );
}

export default Sidebar;
