import React from 'react';
import { Body, Header } from './Card.style';

export type CardProps = {
    header?: string
    body?: string
};

export const Card: React.FC<CardProps> = ({ header, body }) => {

    return (
        <>
            <Header>
                {header}
            </Header>
            <Body>
                {body}
            </Body>
        </>

    );
}

export default Card;