import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Catchyliners from './components/Catchyliners';
import Background from './components/Background';
import ProjectContainer from './components/ProjectContainer';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Menunavs from './components/Menunavs';

function App() {
  return (
    <div className="App">
      <Header />
      <main id='centered-body'>
       <Introduction />
       <Catchyliners />
       <Background />
       <ProjectContainer />
       <Contact />
       <Footer />
       <Menunavs />
      </main>
    </div>
  );
}

export default App;
