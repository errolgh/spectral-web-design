import Nav from './components/layout/Nav'
import Hero from './components/home/Hero'
import WhatWeDo from './components/home/WhatWeDo'
import HowItWorks from './components/home/HowItWorks'
import WhoWeAre from './components/about/WhoWeAre'
import Prices from './components/home/Prices'
import Contact from './components/contact/Contact'
import Footer from './components/layout/Footer'
import { Switch, Route, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  return (
    <div>
      <header>
        <Nav />
      </header>
      <Switch location={location} key={location.pathname}>
        <main>
          <Route path="/" exact>
            <Hero />
            <WhatWeDo />
            <HowItWorks />
            <Prices />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <WhoWeAre />
          </Route>
        </main>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
