import { cloneElement } from 'react';
import { Routes, Route, Link, useOutlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { House, Browsers, AddressBook, Copyright } from '@phosphor-icons/react';
import AnimatedLayout from './AnimatedLayout.js';
import Headshot from './headshot.webp';
import './App.css';
import './base.css';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/sites" element={<SitesPage />} />
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
        <Link to="/" className="logo-home-link">
          <h1>elliott groves design</h1>
        </Link>
        <nav id="main-nav">
          <Link to="/" className={classForPath('/')}><House /><span>hello</span></Link>
          <Link to="/sites" className={classForPath('/sites')}><Browsers /><span>sites</span></Link>
          <Link to="/contact" className={classForPath('/contact')}><AddressBook /><span>contact</span></Link>
        </nav>
      </header>
      <main id="main-content">
        <AnimatePresence mode="wait" initial={true}>
          { element && cloneElement(element, { key: pathname })}
        </AnimatePresence>
      </main>
      <footer id="main-footer">
        <h1>elliott groves design</h1>
        <p>Thanks for visiting!</p>
        <Link to="/contact">Contact me</Link>
        <p className="copyright"><Copyright/> 2024 elliott groves design</p>
      </footer>
    </>
  );
}

function HomePage() {
  return (
    <AnimatedLayout>
      <section className="home-section">
        <figure className="headshot-figure">
          <img src={Headshot} alt="A headshot of Elliott"/>
          <figcaption><h2>I love the web</h2></figcaption>
        </figure>
        <p>My whole life I've been interested in <span className="accent-text">digital spaces </span>like a neighborhood with <span className="accent-text">beautiful landscaping </span>and <span className="accent-text">colorful personalities</span>.</p>
        <p>I've been lucky enough to work as a frontend developer and sometimes UI/UX designer since 2016. I would love to put my years of experience to work creating another beautiful place to be online.</p>
        <p>While you're here feel free to <Link to="/sites">browse some of my work</Link> or <Link to="/contact">consider reaching out</Link> about building a site, hiring a frontend developer - or just to say hi!</p>
      </section>
    </AnimatedLayout>
  );
}

function SitesPage() {
  const listVariants = {
    enter: {
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const listItemVariants = {
    initial: {
      opacity: 0,
      y: -40,
    },
    enter: {
      opacity: 1,
      y: 0,
    },
  }
  return (
    <AnimatedLayout>
      <section className="sites-list">
        <h2>Sites</h2>
        <motion.ul initial="initial" animate="enter" variants={listVariants}>
          <motion.li variants={listItemVariants}>
            <a href="https://welcome-cube.netlify.app" target="_blank" rel="noreferrer">Welcome Cube</a>
            <p>Instruction manual for an introductory <i>Magic: the Gathering</i> fan project.</p>
          </motion.li>
          <motion.li variants={listItemVariants}>
            <a href="http://someguyspizza.com" target="_blank" rel="noreferrer">Some Guys Pizza</a>
            <p>Business and menu site for a local relaxed Italian eatery.</p>
          </motion.li>
          <motion.li variants={listItemVariants}>
            <a href="https://chattersum.com/labs/" target="_blank" rel="noreferrer">Chattersum</a>
            <p>Brochure site for Chattersum, a text analysis software tool.</p>
          </motion.li>
          <motion.li variants={listItemVariants}>
            <a href="http://thetuftress.com" target="_blank" rel="noreferrer">The Tuftress</a>
            <p>Portfolio site for an Indianapolis-based rug tufting artist.</p>
          </motion.li>
        </motion.ul>
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
  return (
    <AnimatedLayout>
      <section className="contact-info">
        <p>If you're interested in a website for your small business, a portfolio site, or looking to hire an experienced frontend developer:</p>
        <p>Email me at sevorge at gmail dot com</p>
        <p>or connect with me <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/elliott-groves-130b8196/">on LinkedIn</a>!</p>
      </section>
    </AnimatedLayout> 
  );
}
