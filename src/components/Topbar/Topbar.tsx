import React from 'react';
import { Bar, IconWrapper } from './Topbar.style';
import { FaHouseUser, FaTools, FaLink } from 'react-icons/fa';
import { TopbarButton } from '../TextStyles/TextStyles.style';

export interface TopbarProps {
    setIsHome: React.Dispatch<React.SetStateAction<boolean>>
    setIsProjects: React.Dispatch<React.SetStateAction<boolean>>
    setIsLinks: React.Dispatch<React.SetStateAction<boolean>>
}

export const Topbar: React.FC<TopbarProps> = ({ setIsHome, setIsProjects, setIsLinks }) => {

    return (
        <Bar>
            <TopbarButton
                height='2.5rem'
                onClick={() => {
                    setIsProjects(false)
                    setIsLinks(false)
                    setIsHome(true)
                }}>
                <IconWrapper>
                    <FaHouseUser size='1.5rem' />
                </IconWrapper>
            </TopbarButton>
            <TopbarButton
                height='2.5rem'
                onClick={() => {
                    setIsHome(false)
                    setIsLinks(false)
                    setIsProjects(true)
                }}>
                <IconWrapper>
                    <FaTools size='1.5rem' />
                </IconWrapper>
            </TopbarButton>
            <TopbarButton
                height='2.5rem'
                onClick={() => {
                    setIsProjects(false)
                    setIsHome(false)
                    setIsLinks(true)
                }}>
                <IconWrapper>
                    <FaLink size='1.5rem' />
                </IconWrapper>
            </TopbarButton>
        </Bar>
    );
}

export default Topbar;
