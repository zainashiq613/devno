import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Process from './components/process/Process';
import Title from './components/small/Title';
import Solutions from './components/solutions/Solutions';

function App() {
  return (
    <div className="bg-[#ECEDF1]">
      <Navbar />
      <Hero />
      <Title />
      <Process />
      <Title />
      <Solutions />
      <Title />
    </div>
  );
}

export default App;
