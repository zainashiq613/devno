import About from './components/about/About';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Process from './components/process/Process';
import Services from './components/services/Services';
import Title from './components/small/Title';
import Solutions from './components/solutions/Solutions';
import Technologies from './components/technologies/Technologies';

function App() {
  return (
    <div className="!background-color px-6 flex items-center justify-center lg:px-35 ">
      <div className="max-w-[1512px]">
        <Navbar />
        <Hero />
        <Title />
        <Process />
        <Title />
        <Solutions />
        <Title />
        <Services />
        <Title />
        <Technologies />
        <Title />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
