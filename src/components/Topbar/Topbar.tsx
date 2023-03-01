import React from 'react';
import { Bar, IconWrapper } from './Topbar.style';
import { FaHouseUser, FaTools, FaLink } from 'react-icons/fa';
import { Link } from '../TextStyles/TextStyles.style';

export const Topbar: React.FC = () => {

    return (
        <Bar>
            <Link href='/'>
                <IconWrapper>
                    <FaHouseUser size='1.5rem' />
                </IconWrapper>
            </Link>
            <Link href='/projects'>
                <IconWrapper>
                    <FaTools size='1.5rem' />
                </IconWrapper>
            </Link>
            <Link href='/links'>
                <IconWrapper>
                    <FaLink size='1.5rem' />
                </IconWrapper>
            </Link>
        </Bar>
    );
}

export default Topbar;
