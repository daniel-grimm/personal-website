import { IconGroup, IconLink } from "../../../components/IconLinks/IconLinks";
import { Paragraph } from "../../../components/TextStyles/TextStyles.style";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { emailUrl, githubUrl, linkedinUrl } from "../../../constants";
import { theme } from "../../../theme";
import { IconContext } from "react-icons";

export const Overview: React.FC = () => {
    return (
        <>
            <Paragraph>Thanks for checking out my website! I hope you learned about my skills and background as a Software Engineer. Feel free to explore my LinkedIn, Github, or send me an email!</Paragraph>
            <IconGroup>
                <IconLink href={githubUrl}>
                    <FaGithub />
                </IconLink>
                <IconLink href={linkedinUrl}>
                    <FaLinkedin />
                </IconLink>
                <IconLink href={emailUrl}>
                    <IconContext.Provider
                        value={{ color: theme.emailBlue.toString() }}
                    >
                        <FaEnvelope />
                    </IconContext.Provider>

                </IconLink>
            </IconGroup>
        </>
    )
}

export default Overview;