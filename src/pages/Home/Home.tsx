import React from 'react';
import Card from '../../components/Card/Card';
import MainLayout from '../../layouts/MainLayout';
import Certifications from './Content/Certifications';
import { Gallery } from './Content/Gallery';
import { Overview } from './Content/Overview';

export const Home: React.FC = () => {
  return (
    <MainLayout>
      <Card header="About Daniel" body={<Overview />} />
      <Card header='Languages, Platforms, and Tech Stacks' body={<Gallery />} />
      <Card header='Certifications' body={<Certifications />} />
    </MainLayout>
  );
}

export default Home;
