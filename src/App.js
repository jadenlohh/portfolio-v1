import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import SocialsBar from './components/SocialsBar';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
import { Container } from 'react-bootstrap';

function App() {
    return (
        <Container fluid className='px-0'>
            <NavigationBar />
            <SocialsBar />

            <HomeSection />
            <AboutSection />
            <ProjectSection />
        </Container>
    );
}

export default App;
