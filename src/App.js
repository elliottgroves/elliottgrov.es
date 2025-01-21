import { cloneElement, useEffect, useRef } from 'react';
import { Routes, Route, Link, useOutlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { House, Browsers, AddressBook, Copyright } from '@phosphor-icons/react';
import AnimatedLayout from './AnimatedLayout.js';
import Headshot from './images/headshot.webp';
import SomeGuys from './images/someguys.mp4';
import Chattersum from './images/chattersum.mp4';
import WelcomeCube from './images/welcomecube.mp4';
import Tuftress from './images/tuftress.mp4';
import LGE from './images/lge.mp4';
import './App.css';
import './base.css';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/sites" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  const { pathname } = useLocation();
  const element = useOutlet();

  function classForPath(path) {
    if (pathname === path) {
      return 'active';
    }
  }
  return (
    <>
      <header id="main-header">
        <nav id="main-nav">
          <Link to="/" className="logo-home-link">
            <h1>Elliott Groves Design.</h1>
          </Link>
          <Link to="/" className={classForPath('/')}><House /><span>hello</span></Link>
          <Link to="/contact" className={classForPath('/contact')}><AddressBook /><span>contact</span></Link>
        </nav>
      </header>
      <main id="main-content">
        <AnimatePresence mode="wait" initial={true}>
          { element && cloneElement(element, { key: pathname })}
        </AnimatePresence>
      </main>
      <footer id="main-footer">
        <h1>Elliott Groves Design.</h1>
        <p>
        </p>
        <p>Thanks for visiting! This site was built using <a href="https://react.dev/" target="_blank" rel="noreferrer">React</a> and <a href="https://motion.dev/" target="_blank" rel="noreferrer">Motion</a>. It also uses <a href="https://phosphoricons.com/" target="_blank" rel="noreferrer">Phosphor Icons</a>.</p>
        <p className="copyright"><Copyright/> 2024 Elliott Groves Design</p>
      </footer>
    </>
  );
}

function HomePage() {
  const listItemWithVideo = useRef(null);
  const isInView = useInView(listItemWithVideo, { amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      listItemWithVideo.current.play();
    } else {
      listItemWithVideo.current.pause();
    }
  }, [isInView]);


  const listItemWithVideoVariants = {
    onscreen: {
      scale: 1,
      x: 0,
    },
    offscreen: {
      scale: 0.8,
      x: -25
    }
  }


  const sites = [
    {
      name: 'Some Guys Pizza',
      description: 'Business and menu site for a local relaxed Italian eatery.',
      url: 'http://someguyspizza.com',
      video: SomeGuys
    },
    {
      name: 'Chattersum',
      description: 'Brochure site for Chattersum, a text analysis software tool.',
      url: 'https://chattersum.com/labs/',
      video: Chattersum
    },
    {
      name: 'Welcome Cube',
      description: 'Instruction manual for an introductory Magic: the Gathering fan project.',
      url: 'https://welcome-cube.netlify.app',
      video: WelcomeCube
    },
    {
      name: 'The Tuftress',
      description: 'Portfolio site for an Indianapolis-based rug tufting artist.',
      url: 'https://thetuftress.com',
      video: Tuftress
    },
    {
      name: 'LeeAnna Groves, Editor',
      description: 'Marketing website for freelance editing services.',
      url: 'https://leeannagroveseditor.com',
      video: LGE
    }
  ];

  return (
    <AnimatedLayout>
      <section className="hero">
        <img src={Headshot} alt="A picture of Elliott" className="headshot"/>
        <p>Your partner for beautiful, seamless web experiences.</p>
      </section>
      <section className="sites-list">
        <h2>Sites</h2>
        <ul>
          {sites.map(site => (
            <motion.li initial="offscreen" whileInView="onscreen" viewport={{amount: 0.6}}>
              <motion.div variants={listItemWithVideoVariants}>
                <motion.video src={site.video} loop muted playsInline/>
                <a href={site.url} target="_blank" rel="noreferrer">{site.name}</a>
                <p>{site.description}</p>
              </motion.div>
            </motion.li>
          ))}
          <motion.li initial="offscreen" whileInView="onscreen" viewport={{amount: 0.8}}>
            <motion.div variants={listItemWithVideoVariants}>
              <motion.video ref={listItemWithVideo} src={SomeGuys} loop muted playsInline/>
              <a href="http://someguyspizza.com" target="_blank" rel="noreferrer">Some Guys Pizza</a>
              <p>Business and menu site for a local relaxed Italian eatery.</p>
            </motion.div>
          </motion.li>
        </ul>
      </section>
      <section className="resume">
        <h2>Work History</h2>
        <ul>
          <li>
            <a href="https://pivotcx.io/">PivotCX</a>
            <p>UX/Software Developer</p>
            <p className="date">2021-2023</p> 
            <p>Lead Vue developer. Primary UI/UX designer. Mentored junior developers. Django and Nuxt app development.</p>
          </li>
          <li>
            <a href="https://backlinehealth.com/">Backline by DrFirst (formerly Diagnotes)</a>
            <p>Web Application Developer</p>
            <p className="date">2016-2020</p> 
            <p>Developed Vue main frontend and Angular scheduling app. UX design for features and views. Created and maintained regression test suites.</p>
          </li>
        </ul>
      </section>
    </AnimatedLayout>
  );
}

function ContactPage() {
  const headshotVariants = {
    initial: {
      rotate: -10,
      opacity: 0
    },
    enter: {
      rotate: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.5,
        easing: 'easeIn'
      }
    }
  }
  return (
    <AnimatedLayout>
      <section className="contact-info">
        <motion.img initial="initial" animate="enter" variants={headshotVariants} src={Headshot} alt="A picture of Elliott" className="headshot"/>
        <p className="card">If you're interested in a website for your small business, a portfolio site, or looking to hire an experienced frontend developer or UX designer, email me at [sevorge at gmail dot com] or connect with me <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/elliott-groves-130b8196/">on LinkedIn</a>!</p>
      </section>
    </AnimatedLayout> 
  );
}
