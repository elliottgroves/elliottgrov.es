import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'motion/react';
import Splt from 'react-spltjs';
import { Browsers, AddressBook, ReadCvLogo, Copyright } from '@phosphor-icons/react';
import Headshot from './images/headshot.webp';
import SomeGuys from './images/someguys.mp4';
import Chattersum from './images/chattersum.mp4';
import WelcomeCube from './images/welcomecube.mp4';
import Tuftress from './images/tuftress.mp4';
import LGE from './images/lge.mp4';
import Logo from './images/logo.svg';
import ContactSplash from './images/contact_splash.svg';
import './App.css';
import './base.css';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });    
  }

  return (
    <>
      <motion.div id="scrolled-toggle"
        viewport={{amount: 'all'}}
        onViewportEnter={() => { setScrolled(false); }}
        onviewportLeave={() => { setScrolled(true); }}
      />
      <motion.nav id="main-nav" className={scrolled ? 'scrolled' : ''}>
        <span>{scrolled}</span>
        <HashLink 
          to="/#" 
          smooth
          className="logo-home-link"
        >
          <img src={Logo} alt="Elliott Groves Design logo" class="logo"/>
          <h1>Elliott Groves Design.</h1>
        </HashLink>
        <ul>
          <li>
            <HashLink 
              to="#sites" 
              scroll={el => scrollWithOffset(el, 0)}
            >
              <Browsers />
              <span>Sites</span>
            </HashLink>
          </li>
          <li>
            <HashLink 
              to="#work" 
              scroll={el => scrollWithOffset(el, 0)}
            >
              <ReadCvLogo />
              <span>Work</span>
            </HashLink>
          </li>
          <li>
            <HashLink 
              to="#contact" 
              scroll={el => scrollWithOffset(el, 0)}
            >
              <AddressBook />
              <span>Contact</span>
            </HashLink>
          </li>
        </ul>
      </motion.nav>
      <main id="main-content">
        <HomePage/>
      </main>
      <footer id="main-footer">
        <h1>Elliott Groves Design.</h1>
        <p>Thanks for visiting! This site was built using <a href="https://react.dev/" target="_blank" rel="noreferrer">React</a> and <a href="https://motion.dev/" target="_blank" rel="noreferrer">Motion</a>. It also uses <a href="https://phosphoricons.com/" target="_blank" rel="noreferrer">Phosphor Icons</a>.</p>
        <p className="copyright"><Copyright/> 2025 Elliott Groves Design</p>
      </footer>
    </>
  );
}

function HomePage() {
  const listItemWithVideoVariants = {
    onscreen: {
      transformOrigin: 'top left',
      scale: 1
    },
    offscreen: {
      transformOrigin: 'top left',
      scale: 0.8
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
    <>
      <section className="hero">
        <h2 aria-label="Your partner for beautiful, seamless web experiences.">
          <span aria-hidden="true">
            <Splt text="Your partner for" speed={0.2} offset={0.05} ease="ease-in" />
          </span>
          <br/>
          <em aria-hidden="true">
            <Splt text="beautiful, seamless" speed={0.6} offset={0.05} ease="ease-in"/>
          </em>
          <br/>
          <span aria-hidden="true">
            <Splt text="web experiences." speed={1.0} offset={0.05} ease="ease-in"/>
          </span>
        </h2>
        <img src={Headshot} alt="Elliott Groves" className="headshot"/>
      </section>
      <section id="sites" className="sites-list">
        <h2>Sites</h2>
        <ul>
          {sites.map(site => (
            <motion.li
              initial="offscreen"
              whileInView="onscreen"
              viewport={{amount: 0.8}}
            >
              <motion.div variants={listItemWithVideoVariants}>
                <motion.video
                  onViewportEnter={(entry) => entry.target.play()}
                  onviewportLeave={(entry) => entry.target.pause()}
                  viewport={{amount: 'all'}}
                  src={site.video}
                  loop
                  muted
                  playsInline
                />
                <a href={site.url} target="_blank" rel="noreferrer">{site.name}</a>
                <p>{site.description}</p>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </section>
      <section id="work" className="resume">
        <h2>Work History</h2>
        <ul>
          <li>
            <p className="date">2021-2023</p> 
            <a href="https://pivotcx.io/">PivotCX</a>
            <p>UX/Software Developer</p>
            <p>Lead Vue developer. Primary UI/UX designer. Mentored junior developers. Django and Nuxt app development.</p>
          </li>
          <li>
            <p className="date">2016-2020</p> 
            <a href="https://backlinehealth.com/">Backline by DrFirst (formerly Diagnotes)</a>
            <p>Web Application Developer</p>
            <p>Developed Vue main frontend and Angular scheduling app. UX design for features and views. Created and maintained regression test suites.</p>
          </li>
        </ul>
      </section>
      <section id="contact" className="contact-info">
        <img src={ContactSplash} alt="Contact splash graphic" className="contact-splash"/>
        <h2>Contact Me</h2>
        <p className="card">If you're interested in a website for your small business, a portfolio site, or looking to hire an experienced frontend developer or UX designer, email me at [sevorge at gmail dot com] or connect with me <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/elliott-groves-130b8196/">on LinkedIn</a>!</p>
      </section>
    </>
  );
}
