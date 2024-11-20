import { useAnimation, useMotionValueEvent, useScroll } from 'framer-motion';

const useScrollAnimation = () => {
  const { scrollY } = useScroll();
  const scrollAnimation = useAnimation();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const viewport = window.innerHeight;
    const scrollValue = window.scrollY;

    if (viewport / latest < viewport) {
      scrollAnimation.start({ opacity: scrollValue });
    } else {
      scrollAnimation.start({ opacity: 0 });
    }
  });

  return scrollAnimation;
};

export default useScrollAnimation;
