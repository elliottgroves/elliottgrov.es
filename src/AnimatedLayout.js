import { motion } from 'framer-motion';

const layoutVariants = {
  initial: {
    transformOrigin: 'top',
    y: '-100%',
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.6,
    }
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.5,
    transition: {
      duration: 0.4,
      ease: 'easeInOut' 
    }
  },
}

export default function AnimatedLayout({children}) {
  return (
    <> 
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={layoutVariants}
        className="animated-layout-content"
      >
        {children}
      </motion.div>
    </>
  );
};
