import React from 'react';
import Card from '../../components/Card/Card';
import { Flex } from '../../components/Flex/Flex.style';
import MainLayout from '../../layouts/MainLayout';

export const Home: React.FC = () => {

  return (
    <MainLayout>
        <Flex flexDirection='column'>
          <Card header='Daniel Grimm Portfolio - This is a really long header to see what happens to the screen' body='Learn more about Daniel!' />
        </Flex>
    </MainLayout>
  );
}

export default Home;
