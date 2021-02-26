import Nav from './components/layout/Nav'
import WhoWeAre from './components/about/WhoWeAre'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Footer from './components/layout/Footer'
import { AnimatePresence } from 'framer-motion'
import { Switch, Route, useLocation } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  offset: 200,
  easing: 'ease-in',
  // disable: 'mobile'
});

function App() {
  const location = useLocation()
  return (
    <div>
      <header>
        <Nav />
      </header>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <main>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <WhoWeAre />
            </Route>
          </main>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
