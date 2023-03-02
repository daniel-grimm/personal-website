import { Paragraph, SectionHeader, SectionTitle } from "../../../components/TextStyles/TextStyles.style";

export const Headstorm: React.FC = () => {
    return (
        <>
            <SectionTitle>Headstorm | 2021 - Current</SectionTitle>
            <SectionHeader>Staffing Tool</SectionHeader>
            <Paragraph>Currently I'm working on creating a staffing web portal written in React, Express, Sequelize, and hosted on AWS.</Paragraph>
            <SectionHeader>Pest Monitoring Portal</SectionHeader>
            <Paragraph>This was a fast-paced project written in Next.JS. I helped develop the web components as well as integrate SSO via MSAL. I also architected and implemented our continuous integration deployment pipelines.</Paragraph>
            <SectionHeader>Agricultural Finance Portal</SectionHeader>
            <Paragraph>I currently work at Headstorm.</Paragraph>
            <SectionHeader>Performance Review Tool</SectionHeader>
            <Paragraph>I currently work at Headstorm.</Paragraph>
        </>

    )
}

export default Headstorm;