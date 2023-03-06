import { Paragraph, SectionHeader, SectionTitle } from "../../../components/TextStyles/TextStyles.style";

export const Headstorm: React.FC = () => {
    return (
        <>
            <SectionTitle>Headstorm | 2021 - Current</SectionTitle>
            <SectionHeader>Staffing Tool</SectionHeader>
            <Paragraph>Currently I'm working on creating a staffing web portal written in React, Express, Sequelize, and hosted on AWS. I've been able to jump in quickly, assisting with bugfixes and revamping our routes organization and usage.</Paragraph>
            <Paragraph>This has also been a place for to grow in my knowledge of Azure which has allowed me to pass the Azure Administrator AZ-104 exam.</Paragraph>
            <SectionHeader>Pest Monitoring Portal</SectionHeader>
            <Paragraph>This was a fast-paced three month project written in Next.JS, and utilized an existing Django backend.</Paragraph>
            <Paragraph>I architected the security protections for the web app, including authentication and authorization. I enabled our sign in pages using React's MSAL packages. I was also able to develop sign up flows for internal and external users of the web portal.</Paragraph>
            <Paragraph>I also architected and maintained the GitHub actions that linted, tested, built, and deployed our code.</Paragraph>
            <Paragraph>This was also an opportunity to grow in my Terraform knowledge. I stood up our deployed Azure App Service for Containers instances using this powerful infrastructure as code tool.</Paragraph>
            <Paragraph>Next.js and React were both still new to me at the beginning of the project, I was able to have a much deeper knowledge of the powerful capabilities of these tools. I was able to contribute features and bugs outside of infrastructure portions of the code that contributed to a comfort that enabled me to create this website.</Paragraph>
            <SectionHeader>Agricultural Finance Portal</SectionHeader>
            <Paragraph>My first client was a project for a local agricultural finance company developing in Angular and C#.</Paragraph>
            <Paragraph>The first months of the project were spent bugfixing the legacy code and resolving UI design flaws. In the spring of 2022 we were able to start rewriting the web portion into React, and the backend into an Event Sourcing architecture. Rewriting the app provided a fantastic greenfield experience which provided interesting challenges. Because the web portal was continually being used by our client, we had to have two websites (Legacy in Angular, new development in React) that were visually identical, and switch seamlessly between the two domains.</Paragraph>
            <Paragraph>Learning the Event Sourcing Architecture was also a great experience because I got to learn about events and event driven programming. I was able to utilize Azure Service Bus to effecting manage events to be consumed by the backend and EventStore.</Paragraph>
            <SectionHeader>Performance Review Tool</SectionHeader>
            <Paragraph>As part of the onboarding process I led a team of new hires to revamp our internal performance review tool written in Vue and Kotlin. This was the first time I was in charge of a team of developers. The team was able to successfully learn new tech stacks quickly and start delivering features to improve the tool. This was a great experience in project management and I enjoyed facilitating questions about designs, languages, or techniques.</Paragraph>
            <SectionHeader>HeadstormU</SectionHeader>
            <Paragraph>I've stepped into a role as HeadstormU coordinator, our employee driven presentations every Friday to educate the company about the latest technologies and tools.</Paragraph>
            <Paragraph>I've also been able to present in front of the company at HeadstormU. In the fall of 2021, I introduced many people to the Fish shell. The talk was successful and convinced several people to switch away from competing shells like Bash and Zsh. In February of 2023 I gave a presentation on Development Processes and how to document team decisions.</Paragraph>
        </>

    )
}

export default Headstorm;