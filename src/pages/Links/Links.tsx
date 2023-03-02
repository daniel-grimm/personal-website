import React from 'react';
import Card from "../../components/Card/Card";
import MainLayout from "../../layouts/MainLayout";
import { Overview } from "./Content/Overview";

export const Links: React.FC = () => {
    return (
        <MainLayout>
            <Card header='Supplementary Links' body={<Overview />} />
        </MainLayout>
    );
}

export default Links;