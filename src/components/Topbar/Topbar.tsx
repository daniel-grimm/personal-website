import React from 'react';
import { Bar, IconWrapper } from './Topbar.style';
import { FaHouseUser, FaTools, FaLink } from 'react-icons/fa';
import { Link } from '../TextStyles/TextStyles.style';

export interface TopbarProps {
    setIsHome: React.Dispatch<React.SetStateAction<boolean>>
    setIsProjects: React.Dispatch<React.SetStateAction<boolean>>
    setIsLinks: React.Dispatch<React.SetStateAction<boolean>>
}

export const Topbar: React.FC<TopbarProps> = ({ setIsHome, setIsProjects, setIsLinks }) => {

    return (
        <Bar>
            <Link onClick={() => {
                setIsProjects(false)
                setIsLinks(false)
                setIsHome(true)
            }}>
                <IconWrapper>
                    <FaHouseUser size='1.5rem' />
                </IconWrapper>
            </Link>
            <Link onClick={() => {
                setIsHome(false)
                setIsLinks(false)
                setIsProjects(true)
            }}>
                <IconWrapper>
                    <FaTools size='1.5rem' />
                </IconWrapper>
            </Link>
            <Link onClick={() => {
                setIsProjects(false)
                setIsHome(false)
                setIsLinks(true)
            }}>
                <IconWrapper>
                    <FaLink size='1.5rem' />
                </IconWrapper>
            </Link>
        </Bar>
    );
}

export default Topbar;
