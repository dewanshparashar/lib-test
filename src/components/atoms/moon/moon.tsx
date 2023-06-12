import useWindowSize from 'react-use/lib/useWindowSize';
import { motion, useScroll, useTransform } from 'framer-motion';
import moonUrl from '../../../../static/assets/moon.webp';

export const Moon = () => {
  const { width } = useWindowSize();
  const moonScaleRange = width >= 1024 ? [0.75, 1] : [0.75, 1.25];

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], moonScaleRange);

  return (
    <motion.img
      src={moonUrl}
      alt="Moon"
      className="absolute bottom-[-10%] z-0 md:right-[0] md:bottom-[-45%] md:max-w-[75vw]"
      style={{ scale }}
    />
  );
};
