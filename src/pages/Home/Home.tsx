import React from 'react';
import Card from '../../components/Card/Card';
import MainLayout from '../../layouts/MainLayout';
import { Flex } from './Home.style';

export const Home: React.FC = () => {

  return (
    <MainLayout>
      <Flex>
        <Card header='Daniel Grimm Portfolio' body='Learn more about Daniel!' />
      </Flex>
    </MainLayout>
  );
}

export default Home;
