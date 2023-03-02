import { ListItem, Paragraph, UnorderedList } from "../../../components/TextStyles/TextStyles.style";

export const Certifications: React.FC = () => {
    return (
        <>
            <UnorderedList>
                <ListItem>
                    <Paragraph>Azure Fundamentals</Paragraph>
                </ListItem>
                <ListItem>
                    <Paragraph>Azure Data Fundamentals</Paragraph>
                </ListItem>
                <ListItem>
                    <Paragraph>AWS Certified Cloud Practitioner</Paragraph>
                </ListItem>
            </UnorderedList>
        </>
    );
}

export default Certifications;