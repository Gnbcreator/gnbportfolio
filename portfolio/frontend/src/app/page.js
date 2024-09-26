"use client"
import About from "./components/about/page";
import Education from "./components/education/page";
import Hero from "./components/hero/page";
import Particles from "./components/particles";
import Navigation from "./navigation/page";
import Container from '@mui/material/Container';
import Projects from './components/projects/page';
import Contacts from './components/contacts/page'
import Copyrighted from './components/copyrited/page'
import { Element } from 'react-scroll'


export default function Home() {
  return (
    <>
      <Container maxWidth="xl" className=" dark:bg-slate-800">
        <Particles className="absolute inset-1 -z-10 h-svh w-svw" quantity={100} />
        <main >
          <Navigation />
          <div>
            <Element id='home' >
              <Hero />
            </Element>
            <Element id='about' >
              <About />
            </Element>
            <Element id='education' >
              <Education />
            </Element>
            <Element id='projects' >
              <Projects />
            </Element>
            <Element id='contacts' >
              <Contacts />
            </Element>
            <Element id='footer' >
              <Copyrighted />
            </Element>
          </div>
        </main>

      </Container>
    </>
  );
}

