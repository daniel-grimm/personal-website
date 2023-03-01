import React from 'react';
import Card from '../../components/Card/Card';
import { Flex } from '../../components/Flex/Flex.style';
import MainLayout from '../../layouts/MainLayout';
import { Overview } from './Content/Overview';

export const Home: React.FC = () => {

  return (
    <MainLayout>
        <Flex flexDirection='column'>
          <Card header="About Daniel" body={<Overview />} />
        </Flex>
    </MainLayout>
  );
}

export default Home;
