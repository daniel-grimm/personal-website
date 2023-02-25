import React from 'react';
import Card from '../../components/Card';
import MainLayout from '../../layouts/MainLayout';

export const Bio: React.FC = () => {

    const description: string = 'This is Daniel Grimm\'s bio'

    return (
        <MainLayout>
            <Card header='Daniel Grimm Bio' body={description} />
        </MainLayout>
    );
}

export default Bio;