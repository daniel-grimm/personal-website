import React from 'react';
import { Body, Header } from './Topbar.style';

export type CardProps = {
    header?: string
    body?: string
};

export const Topbar: React.FC<CardProps> = ({ header, body }) => {

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

export default Topbar;