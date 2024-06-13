import { motion } from "framer-motion";

import {
  footerAnimation,
  headerAnimation,
  navigateAnimation,
} from "../../../utils/parallaxAnimations";

import { COMMON_ANIMATION_DURATION } from "../Parallax";

import menu from "../../../assets/logos/Menu.svg";
import logo from "../../../assets/logos/Mountain Logo.svg";
import scroll from "../../../assets/icons/Mouse.svg";
import share from "../../../assets/icons/Share.svg";

import behanceLogo from "../../../assets/socials/Behance.svg";
import instagramLogo from "../../../assets/socials/Instagram.svg";
import dribbleLogo from "../../../assets/socials/Dribbble.svg";
import mediumLogo from "../../../assets/socials/Medium.svg";

import "./ParallaxContent.scss";

const sociallinks = [
  {
    label: "instagramLogo",
    image: instagramLogo,
    path: "/",
  },
  {
    label: "mediumLogo",
    image: mediumLogo,
    path: "/",
  },
  {
    label: "dribbleLogo",
    image: dribbleLogo,
    path: "/",
  },
  {
    label: "behanceLogo",
    image: behanceLogo,
    path: "/",
  },
];

const ParallaxContent = () => {
  return (
    <div className="parallax__content">
      <motion.nav
        initial={navigateAnimation.initial}
        animate={navigateAnimation.animate}
        transition={{ duration: COMMON_ANIMATION_DURATION }}
        className="parallax__navigation navigation-parallax"
      >
        <article className="navigation-parallax__left">
          <ul className="navigation-parallax__list">
            <li className="navigation-parallax__item">
              <img
                src={menu}
                alt="menu"
                className="navigation-parallax__item-menu"
              />
            </li>
            <li className="navigation-parallax__item">
              <a href="/" className="navigation-parallax__link">
                Explore
              </a>
            </li>
            <li className="navigation-parallax__item">
              <a href="/" className="navigation-parallax__link">
                Store
              </a>
            </li>
          </ul>
        </article>
        <article className="navigation-parallax__middle">
          <div className="navigation-parallax__logo">
            <img
              src={logo}
              alt="logo"
              className="navigation-parallax__logo-img"
            />
          </div>
        </article>
        <article className="navigation-parallax__right">
          <ul className="navigation-parallax__socials">
            {sociallinks.map((link) => (
              <li key={link.label} className="navigation-parallax__social-logo">
                <a
                  href={link.path}
                  className="navigation-parallax__social-link"
                >
                  <img
                    src={link.image}
                    alt={link.label}
                    className="navigation-parallax__social-img"
                  />
                </a>
              </li>
            ))}
          </ul>
        </article>
      </motion.nav>
      <motion.header
        initial={headerAnimation.initial}
        animate={headerAnimation.animate}
        transition={{ duration: COMMON_ANIMATION_DURATION }}
        className="parallax__header"
      >
        <h1 className="parallax__title">Nepal Mountains</h1>
        <p className="parallax__description">
          Visit the most beautiful mountains in the world
        </p>
      </motion.header>
      <motion.footer
        initial={footerAnimation.initial}
        animate={footerAnimation.animate}
        transition={{ duration: COMMON_ANIMATION_DURATION }}
        className="parallax__footer footer-parallax"
      >
        <article className="footer-parallax__scroll scroll-parallax">
          <div className="scroll-parallax__text">Scroll</div>
          <img src={scroll} alt="scroll" className="scroll-parallax__icon" />
        </article>
        <article className="footer-parallax__share">
          <img
            src={share}
            alt="share"
            className="footer-parallax__share-icon"
          />
        </article>
      </motion.footer>
    </div>
  );
};

export default ParallaxContent;
