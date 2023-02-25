import React from 'react';
import { Body, Box, Header } from './Card.style';

export type CardProps = {
    header?: string
    body?: string
};

export const Card: React.FC<CardProps> = ({ header, body }) => {

    return (
        <Box>
            <Header>
                {header}
            </Header>
            <Body>
                {body}
            </Body>
        </Box>

    );
}

export default Card;