import React from 'react';
import { Bar, IconWrapper } from './Topbar.style';
import { FaHouseUser, FaScroll, FaTools } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { theme } from '../../theme';

export const Topbar: React.FC = () => {

    return (
        <Bar>
            <IconWrapper>
                <FaHouseUser color={theme.emerald200.toString()} size='1.5rem' />
            </IconWrapper>
            <IconWrapper>
                <FaScroll color={theme.emerald200.toString()} size='1.5rem' />
            </IconWrapper>
            <IconWrapper>
                <FaTools color={theme.emerald200.toString()} size='1.5rem' />
            </IconWrapper>
            <IconWrapper>
                <BsFillPeopleFill color={theme.emerald200.toString()} size='1.5rem' />
            </IconWrapper>
        </Bar>
    );
}

export default Topbar;