import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Home from "../Home/Home";
import Links from "../Links/Links";
import Projects from "../Projects/Projects";

export const Main: React.FC = () => {
    const [isHome, setIsHome] = useState(true);
    const [isProjects, setIsProjects] = useState(false);
    const [isLinks, setIsLinks] = useState(false);

    return (
        <>
            {isHome && (
                <>
                    <MainLayout setIsHome={setIsHome} setIsProjects={setIsProjects} setIsLinks={setIsLinks}>
                        <Home />
                    </MainLayout>
                </>
            )}
            {isProjects && (
                <>
                    <MainLayout setIsHome={setIsHome} setIsProjects={setIsProjects} setIsLinks={setIsLinks}>
                        <Projects />
                    </MainLayout>
                </>
            )}
            {isLinks && (
                <>
                    <MainLayout setIsHome={setIsHome} setIsProjects={setIsProjects} setIsLinks={setIsLinks}>
                        <Links />
                    </MainLayout>
                </>
            )}
        </>
    );
}

export default Main;