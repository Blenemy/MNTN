import { useEffect } from "react";
import { motion, useAnimation, useScroll } from "framer-motion";

import { cloudsAnimation } from "../../utils/parallaxAnimations";

import ParallaxContent from "./ParallaxContent/ParallaxContent";

import "./Parallax.scss";

export const COMMON_ANIMATION_DURATION = 1.2;

const Parallax = () => {
  const mountainsControls = useAnimation();
  const darkBackgroundControls = useAnimation();

  const { scrollY } = useScroll();

  useEffect(() => {
    const animateInitialSequence = async () => {
      await mountainsControls.start({
        transform: "perspective(1280px) translateZ(0)",
        transition: { duration: COMMON_ANIMATION_DURATION },
      });
    };

    const handleScroll = async () => {
      const scrollValue = scrollY.get();
      if (scrollValue > 50) {
        await Promise.all([
          mountainsControls.start({
            top: "-50%",
            transition: { duration: 1 },
          }),
          darkBackgroundControls.start({
            bottom: "0",
            transition: { duration: 1 },
          }),
        ]);
      } else {
        await Promise.all([
          mountainsControls.start({
            top: "0",
            transition: { duration: 1 },
          }),
          darkBackgroundControls.start({
            bottom: "-40%",
            transition: { duration: 1 },
          }),
        ]);
      }
    };

    animateInitialSequence();

    const unsubscribeScroll = scrollY.onChange(handleScroll);
    return () => {
      unsubscribeScroll();
    };
  }, [mountainsControls, darkBackgroundControls, scrollY]);

  return (
    <section className="parallax" id="parallax">
      <div className="parallax__body">
        <ParallaxContent />;
        <div className="parallax__images images-parallax">
          <div className="images-parallax__item">
            <motion.div
              className="images-parallax__clouds"
              initial={cloudsAnimation.initial}
              animate={cloudsAnimation.animate}
              transition={{ duration: COMMON_ANIMATION_DURATION }}
            ></motion.div>
          </div>
          <div className="images-parallax__item">
            <motion.div
              id="mountains"
              className="images-parallax__mountains"
              initial={{ transform: "perspective(1280px) translateZ(700px)" }}
              animate={mountainsControls}
            ></motion.div>
          </div>
          <div className="images-parallax__item">
            <motion.div
              id="dark-background"
              className="images-parallax__dark-background"
              animate={darkBackgroundControls}
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parallax;
