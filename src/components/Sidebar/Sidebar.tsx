import React from 'react';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import { Link, Bar, ListItem } from './Sidebar.style';
import { FaHouseUser, FaTools, FaLink } from 'react-icons/fa';

export const Sidebar: React.FC = () => {

    return (
        <>
            <Bar>
                <ProfilePicture />
                <Link href='/'>
                    <ListItem>
                        <FaHouseUser />
                        Home
                    </ListItem>
                </Link>
                <Link href='/projects'>
                    <ListItem>
                        <FaTools />
                        Projects
                    </ListItem>
                </Link>
                <Link href='/links'>
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
