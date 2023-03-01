import React from 'react';
import Card from '../../components/Card/Card';
import MainLayout from '../../layouts/MainLayout';
import Headstorm from './Content/Headstorm';
import Microsoft from './Content/Microsoft';
import Pactera from './Content/Pactera';
import Progeny from './Content/Progeny';

export const Projects: React.FC = () => {

    return (
        <MainLayout>
            <Card header='Projects' body={<></>} />
            <Card body={<Headstorm />} />
            <Card body={<Microsoft />} />
            <Card body={<Progeny />} />
            <Card body={<Pactera />} />
        </MainLayout>
    );
}

export default Projects;