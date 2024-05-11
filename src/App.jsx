import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Languages, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-white-100">
        <About />
        <Experience />
        </div>
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Languages />

      </div>
    </BrowserRouter>
  );
}

export default App;
