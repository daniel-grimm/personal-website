import React from 'react';
import Card from "../../components/Card/Card";
import MainLayout from "../../layouts/MainLayout";
import { GitHub } from "./Content/GitHub";

export const Links: React.FC = () => {
    return (
        <MainLayout>
            <Card body={<GitHub />} />
        </MainLayout>
    );
}

export default Links;