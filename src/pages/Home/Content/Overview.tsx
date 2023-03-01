import { ListItem, Paragraph, SectionHeader, TextLink, UnorderedList } from "../../../components/TextStyles/TextStyles.style";
import { githubUrl, linkedinUrl } from "../../../constants";

export const Overview: React.FC = () => {
    return (
        <>
            <Paragraph>I am an experienced full stack developer, with over 4.5 years of software experience across a variety of industries. I'm currently working at Headstorm as a software consultant, creating products in a variety of industries. I've also worked at Microsoft on the Azure Commerce Platform, and worked at Progeny Systems as a contractor for the Navy.</Paragraph>
            <Paragraph>I love coding and have a passion to automate workflows so that I and my team can just code.</Paragraph>
            <Paragraph>Professionally I've used C# and .NET to create GraphQL and REST backends. I've created finance, agricultural, and customer support web portals in React and Angular. All of these systems have used PostgreSQL or T-SQL databases, typically hosted in Azure.</Paragraph>
            <Paragraph>You can find out more about what tech stacks I've used for projects on the Projects page.</Paragraph>
            <Paragraph>Check out my <TextLink href={githubUrl}>GitHub</TextLink> and <TextLink href={linkedinUrl}>LinkedIn</TextLink>!</Paragraph>
            <SectionHeader>Certifications</SectionHeader>
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
            <SectionHeader>Languages, Platforms, and Tech Stacks</SectionHeader>
            <UnorderedList>
                <ListItem>
                    <Paragraph>C# / .NET</Paragraph>
                </ListItem>
                <ListItem>
                    <Paragraph>React</Paragraph>
                </ListItem>
                <ListItem>
                    <Paragraph>SQL</Paragraph>
                </ListItem>
                <ListItem>
                    <Paragraph>Angular</Paragraph>
                </ListItem>
                <ListItem>
                    <Paragraph>Next.JS</Paragraph>
                </ListItem>
                <ListItem>
                    <Paragraph>JIRA</Paragraph>
                </ListItem>
                <ListItem>
                    <Paragraph>Terraform</Paragraph>
                </ListItem>
                <ListItem>
                    <Paragraph>ARM (Azure Resource Manager) Templates</Paragraph>
                </ListItem>
                <ListItem>
                    <Paragraph>GitHub Actions</Paragraph>
                </ListItem>
                <ListItem>
                    <Paragraph>Azure DevOps</Paragraph>
                </ListItem>
            </UnorderedList>
        </>
    );
}
