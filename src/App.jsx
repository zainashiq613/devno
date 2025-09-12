import { useState } from 'react';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Process from './components/process/Process';
import Services from './components/services/Services';
import Title from './components/small/Title';
import Solutions from './components/solutions/Solutions';
import Technologies from './components/technologies/Technologies';
import BackgroundGrid from './components/hero/BackgroundGrid';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="!background-color px-6 sm:px-10 flex items-center justify-center lg:px-10 xl:px-35 ">
      <div className="relative max-w-[1512px]">
        <Navbar showContactForm={showContactForm} setShowContactForm={setShowContactForm} />
        <Hero setShowContactForm={setShowContactForm} />
        <Title
          id={'process'}
          section={'Process'}
          title={'Our'}
          spanText={'Proven Process'}
          desc={'From concept to execution, see how we bring AI to life in your business'}
        />
        <Process />
        <Title
          id={'solutions'}
          section={'Solutions'}
          title={'Why choose'}
          spanText={'Devno’s'}
          desc={'Innovative solutions tailored to meet your unique business needs'}
        />
        <Solutions />
        <Title
          id={'services'}
          section={'Services'}
          title={'What'}
          spanText={'We Do'}
          desc={'From concept to execution, see how we bring ideas to life in your business'}
        />
        <Services setShowContactForm={setShowContactForm} />
        <Title
          id={'technologies'}
          section={'Technologies'}
          title={'Technologies'}
          spanText={'We Use'}
        />
        <Technologies />
        <Title
          id={'about'}
          section={'About'}
          title={'Who'}
          spanText={'We Are'}
          desc={
            "At Devno, we believe in the power of technology to transform businesses and enhance everyday life. We're committed to staying at the forefront of technological advancements, continually refining our skills to provide the best possible solutions.Join us on a journey of innovation and success."
          }
        />
        <About showContactForm={showContactForm} setShowContactForm={setShowContactForm} />
        <Footer />
      </div>
      <BackgroundGrid />
    </div>
  );
}

export default App;
