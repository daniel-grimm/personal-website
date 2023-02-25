import React from 'react';
import Card from '../../components/Card/Card';
import { Flex } from '../../components/Flex/Flex.style';
import MainLayout from '../../layouts/MainLayout';

export const Bio: React.FC = () => {

    const description: string = `This is Daniel Grimm's bio`

    return (
        <MainLayout>
            <Flex flexDirection='column'>
                <Card header='Daniel Grimm Bio' body={description} />
            </Flex>
        </MainLayout>
    );
}

export default Bio;