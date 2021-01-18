import Nav from './components/Nav'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import HowItWorks from './components/HowItWorks'
import WhoWeAre from './components/WhoWeAre'
import Prices from './components/Prices'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <WhatWeDo />
        <HowItWorks />
        <WhoWeAre />
        <Prices />
      </main>
      <Footer />
    </div>
  );
}

export default App;
