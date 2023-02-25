import React from 'react';
import Card from '../../components/Card';
import MainLayout from '../../layouts/MainLayout';

export const Home: React.FC = () => {

  return (
    <MainLayout>
      <Card header='Daniel Grimm Portfolio' body='Learn more about Daniel!' />
    </MainLayout>
  );
}

export default Home;
