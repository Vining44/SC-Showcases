import Hero from './Hero';
import Footer from './Footer';
import Banner from './Banner';
import TopNav from './Topnav';
import Jinx from './jinx.svg';
import Clinic from './clinicpic.svg';
import ClinicTwo from './clinicimagetwo.svg';
import ClinicThree from './clinicimagethree.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <TopNav />
    <div className="filler-one">

    </div>
    <div className="pic">
      <Hero />
    </div>  
    <div className="jinxy">
      <img src={Jinx} />
    </div>  
    <div className="body-one">
      Meet and spend time with active Southwestern players.
    </div>
    <div className="pic-two">
      <img src={Clinic} />
    </div>
    <div className="jinxy-two">
      <img src={Jinx} />
    </div>
    <div className="body-two">
      Showcase your skills in front of three high level college coaches.
    </div>
    <div className="pic-three">
      <img src={ClinicTwo} />
    </div>
    <div className="jinxy-three">
      <img src={Jinx} />
    </div>
    <div className="body-three">
      Participate in drills and have your game evaluated.
    </div>
    <div className="pic-four">
      <img src={ClinicThree} />
    </div>
    <Footer />
    </div>
  );
}

export default App;
