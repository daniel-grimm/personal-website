import React from 'react';
import { Bar, IconWrapper } from './Topbar.style';
import { FaHouseUser, FaTools, FaLink } from 'react-icons/fa';

export const Topbar: React.FC = () => {

    return (
        <Bar>
            <IconWrapper>
                <FaHouseUser size='1.5rem' />
            </IconWrapper>
            <IconWrapper>
                <FaTools size='1.5rem' />
            </IconWrapper>
            <IconWrapper>
                <FaLink size='1.5rem' />
            </IconWrapper>
        </Bar>
    );
}

export default Topbar;
