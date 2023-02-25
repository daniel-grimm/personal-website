import React from 'react';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import { Bar, ListItem } from './Sidebar.style';

export const Sidebar: React.FC = () => {

    return (
        <>
            <Bar>
                <ProfilePicture />
                <ListItem>Home</ListItem>
                <ListItem>Resume</ListItem>
                <ListItem>Projects</ListItem>
                <ListItem>Family</ListItem>
            </Bar>
        </>

    );
}

export default Sidebar;
