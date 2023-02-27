import React from 'react';
import { Body, Box, Break, Header, Text } from './Card.style';

export type CardProps = {
    header?: string
    body: Array<string>
};

export const Card: React.FC<CardProps> = ({ header, body }) => {

    return (
        <Box>
            <Header>
                {header}
            </Header>
            <Body>
                {body.map(text => {
                    return (
                        <>
                            <Text>
                                {text}
                            </Text>
                            <Break />
                        </>
                    );
                })}
            </Body>
        </Box>

    );
}

export default Card;