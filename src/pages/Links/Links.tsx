import Card from "../../components/Card/Card";
import { Flex } from "../../components/Flex/Flex.style";
import MainLayout from "../../layouts/MainLayout";
import { GitHub } from "./Content/GitHub";

export const Links: React.FC = () => {
    return (
        <MainLayout>
            <Flex flexDirection='column'>
                <Card body={<GitHub />} />
            </Flex>
        </MainLayout>
    );
}