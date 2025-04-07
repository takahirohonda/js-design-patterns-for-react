import { useState } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'

export const slideDownAnimationVariants: Variants = {
  intro: {
    y: -50,
    opacity: 0,
    height: 0,
    transition: { duration: 0.3 },
  },
  enter: {
    y: 0,
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3, opacity: { duration: 0.2, delay: 0.1 } },
  },
  exit: {
    y: -50,
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      height: { duration: 0.2, delay: 0.1 },
      y: { duration: 0.2, delay: 0.1 },
    },
  },
}

export function App() {
  const [show, setShow] = useState(false)

  const onExitComplete = () => {
    console.log('The div has been removed after the exit animation')
  }

  return (
    <div>
      <button type="button" onClick={() => setShow((prev) => !prev)}>
        Toggle
      </button>
      {/* "framer-motion": "^4.1.17", is not compatible with react 18 */}
      <AnimatePresence // errors with v4 -> upgraded to v7 which has the minimum react 18 support
        exitBeforeEnter // Valid in v4.1.17
        presenceAffectsLayout={false} // Fixed typo
        onExitComplete={onExitComplete}
      >
        {show && (
          <motion.div
            variants={slideDownAnimationVariants}
            key="modal"
            initial="intro"
            animate="enter"
            exit="exit"
          >
            Animated Div
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
