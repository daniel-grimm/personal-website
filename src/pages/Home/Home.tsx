import React from 'react';
import Card from '../../components/Card/Card';
import MainLayout from '../../layouts/MainLayout';
import { Overview } from './Content/Overview';

export const Home: React.FC = () => {
  return (
    <MainLayout>
      <Card header="About Daniel" body={<Overview />} />
    </MainLayout>
  );
}

export default Home;
