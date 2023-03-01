import React from 'react';
import Card from '../../components/Card/Card';
import { Flex } from '../../components/Flex/Flex.style';
import MainLayout from '../../layouts/MainLayout';
import Headstorm from './Content/Headstorm';

export const Projects: React.FC = () => {

    return (
        <MainLayout>
            <Flex flexDirection='column'>
                <Card body={<Headstorm />} />
            </Flex>
        </MainLayout>
    );
}

export default Projects;