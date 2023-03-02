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
            <Paragraph>As part of the onboarding process I led a team of new hires to revamp our internal performance review tool written in Vue and Kotlin.</Paragraph>
            <SectionHeader>HeadstormU</SectionHeader>
            <Paragraph>I've also stepped into a role as HeadstormU coordinator, our employee driven presentations every Friday to educate the company about the latest technologies and tools.</Paragraph>
        </>

    )
}

export default Headstorm;