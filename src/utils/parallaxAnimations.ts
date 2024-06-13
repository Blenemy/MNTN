export const COMMON_MARGIN_VALUE = "-100px";
export const COMMON_INITIAL_PERSPECTIVE_VALUE =
  "perspective(1280px) translateZ(700px)";
export const COMMON_ANIMATE_PERSPECTIVE_VALUE =
  "perspective(1280px) translateZ(0)";

export const cloudsAnimation = {
  initial: { transform: COMMON_INITIAL_PERSPECTIVE_VALUE },
  animate: { transform: COMMON_ANIMATE_PERSPECTIVE_VALUE },
};

export const moutainAnimation = {
  initial: {
    transform: COMMON_INITIAL_PERSPECTIVE_VALUE,
  },
  animate: {
    transform: COMMON_ANIMATE_PERSPECTIVE_VALUE,
  },
};

export const darkBackgroundAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const footerAnimation = {
  initial: {
    marginBottom: COMMON_MARGIN_VALUE,
    opacity: 0,
  },
  animate: {
    marginBottom: 0,
    opacity: 1,
  },
};

export const navigateAnimation = {
  initial: {
    marginTop: COMMON_MARGIN_VALUE,
    opacity: 0,
  },
  animate: {
    marginTop: 0,
    opacity: 1,
  },
};

export const headerAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};
