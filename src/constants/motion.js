const fadeIn = (delay) => {
    return {
      hidden: { opactiy: 0, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    }
}

const slideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.5,
        },
    },
};

const slideInFromBottom = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.5,
        },
    },
};

const slideInFromLeft = (delay) => {
    return {
      hidden: { x: -100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
}

const slideInFromRight = (delay) => {
    return {
      hidden: { x: 100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
}

export default {
    fadeIn,
    slideInFromTop,
    slideInFromBottom,
    slideInFromLeft,
    slideInFromRight
}