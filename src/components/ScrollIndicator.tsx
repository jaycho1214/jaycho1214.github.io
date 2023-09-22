import { motion, useScroll, useTransform } from 'framer-motion';
import { useWindowDimensions } from '../hooks';
import { isMobileSafari } from 'react-device-detect';

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const { height } = useWindowDimensions();
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobileSafari ? height : height - 50],
  );

  return (
    <div
      style={{
        zIndex: 99,
        position: 'fixed',
        height: '100vh',
        overflow: 'hidden',
        top: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <motion.div
        style={{
          translateY,
          backgroundColor: '#FFF',
          width: '2px',
          height: '50px',
        }}
      />
    </div>
  );
}
