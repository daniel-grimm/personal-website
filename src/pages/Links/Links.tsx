import React from 'react';
import Card from "../../components/Card/Card";
import { Overview } from "./Content/Overview";

export const Links: React.FC = () => {
    return (
        <>
            <Card header='Supplementary Links' body={<Overview />} />
        </>
    );
}

export default Links;