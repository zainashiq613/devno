import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Process from './components/process/Process';
import Title from './components/small/Title';

function App() {
  return (
    <div className="bg-[#ECEDF1]">
      <Navbar />
      <Hero />
      <Title />
      <Process />
    </div>
  );
}

export default App;
