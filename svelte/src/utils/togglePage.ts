import { isExperience, isHome } from "../store/pageStore";
import { EXPERIENCE, HOME } from "./pageConstants";

export function togglePage(page: string) {
    switch (page) {
        case HOME:
            isHome.set(true);
            isExperience.set(false);
        case EXPERIENCE:
            isHome.set(false);
            isExperience.set(true);
    }
}
