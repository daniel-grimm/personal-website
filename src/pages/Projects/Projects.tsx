import React from 'react';
import Card from '../../components/Card/Card';
import { Flex } from '../../components/Flex/Flex.style';
import MainLayout from '../../layouts/MainLayout';
import Headstorm from './Content/Headstorm';
import Microsoft from './Content/Microsoft';
import Pactera from './Content/Pactera';
import Progeny from './Content/Progeny';

export const Projects: React.FC = () => {

    return (
        <MainLayout>
            <Flex flexDirection='column'>
                <Card header='Projects' body={<></>} />
                <Card body={<Headstorm />} />
                <Card body={<Microsoft />} />
                <Card body={<Progeny />} />
                <Card body={<Pactera />} />
            </Flex>
        </MainLayout>
    );
}

export default Projects;