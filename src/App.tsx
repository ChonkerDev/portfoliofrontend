import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import TopBar from './components/layout/TopBar.tsx';
import Home from "./pages/Home/Home.tsx";
import Resume from "./pages/Resume.tsx";
import Skills from "./pages/Skills.tsx";
import NotFound from "./pages/NotFound.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Projects from "./pages/Projects.tsx";
import ProjectOverview from "./pages/Projects/Overview/ProjectOverview.tsx";
import ProjectProjectLilith from "./pages/Projects/Project Lilith/ProjectProjectLilith.tsx";
import ProjectSynthRace from "./pages/Projects/Synth Race/ProjectSynthRace.tsx";
import ProjectDeliveryCorp from "./pages/Projects/DeliveryCorp/ProjectDeliveryCorp.tsx";
import ProjectChonkerUtilities from "./pages/Projects/Chonker Utilities/ProjectChonkerUtilities.tsx";

function App() {
    return (
        <div>
            <Router>
                <TopBar/>
                <Routes>
                    <Route path="/" element={<Navigate to="/home"
                                                       replace/>}/> /*auto route to home when entering site initially*/
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/resume" element={<Resume/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}>
                        <Route index element={<Navigate to="projectoverview" replace/>}/>
                        <Route path="projectoverview" element={<ProjectOverview/>}/>
                        <Route path="projectprojectlilith" element={<ProjectProjectLilith/>}/>
                        <Route path="projectsynthrace" element={<ProjectSynthRace/>}/>
                        <Route path="projectdeliverycorp" element={<ProjectDeliveryCorp/>}/>
                        <Route path="chonkerutilies" element={<ProjectChonkerUtilities/>}/>
                    </Route>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;