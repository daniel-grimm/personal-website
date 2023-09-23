import { isProjects, isHome, isCertifications, isSkills } from "../store/pageStore";
import { PROJECTS, HOME, CERTIFICATIONS, SKILLS } from "./pageConstants";

export function togglePage(page: string) {
    console.log(page);
    switch (page) {
        case HOME:
            isHome.set(true);
            isProjects.set(false);
            isCertifications.set(false);
            isSkills.set(false);
            break;
        case PROJECTS:
            isHome.set(false);
            isProjects.set(true);
            isCertifications.set(false);
            isSkills.set(false);
            break;
        case CERTIFICATIONS:
            isHome.set(false);
            isProjects.set(false);
            isCertifications.set(true);
            isSkills.set(false);
            break;
        case SKILLS:
            isHome.set(false);
            isProjects.set(false);
            isCertifications.set(false);
            isSkills.set(true);
            break;
    }
}
