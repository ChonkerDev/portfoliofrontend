import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import TopBar from './components/TopBar';
import Home from "./pages/Home.tsx";
import Resume from "./pages/Resume.tsx";
import {WorkHistory} from "./pages/WorkHistory.tsx";
import NotFound from "./pages/NotFound.tsx";
import Contact from "./pages/Contact.tsx";
import Projects from "./pages/Projects.tsx";
import ProjectOverview from "./pages/Projects/ProjectOverview.tsx";
import ProjectProjectLilith from "./pages/Projects/ProjectProjectLilith.tsx";
import ProjectSynthRace from "./pages/Projects/ProjectSynthRace.tsx";

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
                    </Route>
                    <Route path="/workhistory" element={<WorkHistory/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>

            {/*            <Routes>
                <Route path="/home" element={<Home/>}/>
{                <Route path="/projects" element={<Projects/>}>
                    <Route index element={<Navigate to="projectoverview" replace/>}/>
                    <Route path="projectoverview" element={<ProjectOverview/>}/>
                    <Route path="projectprojectlilith" element={<ProjectProjectLilith/>}/>
                    <Route path="projectsynthrace" element={<ProjectSynthRace/>}/>
                </Route>
                *!/
            </Routes>*/}
        </div>
    );
}

export default App;