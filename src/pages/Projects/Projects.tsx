import React from 'react';
import Card from '../../components/Card/Card';
import Headstorm from './Content/Headstorm';
import Microsoft from './Content/Microsoft';
import Pactera from './Content/Pactera';
import Progeny from './Content/Progeny';

export const Projects: React.FC = () => {

    return (
        <>
            <Card header='Projects' body={<></>} />
            <Card body={<Headstorm />} />
            <Card body={<Microsoft />} />
            <Card body={<Progeny />} />
            <Card body={<Pactera />} />
        </>
    );
}

export default Projects;