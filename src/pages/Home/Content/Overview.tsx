import { Paragraph, TextLink } from "../../../components/TextStyles/TextStyles.style";
import { githubUrl, linkedinUrl } from "../../../constants";

export const Overview: React.FC = () => {
    return (
        <>
            <Paragraph>I am an experienced full stack developer out of the Dallas-Fort Worth Metroplex area, with over 4.5 years of software experience across government, commerce, financial, and agricultural industries. I'm currently working at Headstorm as a senior software consultant, creating software products for financial and agricultural clients.</Paragraph>
            <Paragraph>I love coding and have a passion to automate workflows so that I and my team can just code.</Paragraph>
            <Paragraph>Professionally I've used C# and .NET to create GraphQL and REST backends. I've created finance, agricultural, and customer support web portals in React and Angular. All of these systems have used PostgreSQL or T-SQL databases, typically hosted in Azure.</Paragraph>
            <Paragraph>You can find out more about what tech stacks I've used for projects on the <TextLink href='/projects'>Projects</TextLink> page.</Paragraph>
            <Paragraph>Check out my <TextLink href={githubUrl}>GitHub</TextLink> and <TextLink href={linkedinUrl}>LinkedIn</TextLink>!</Paragraph>
        </>
    );
}

export default Overview;