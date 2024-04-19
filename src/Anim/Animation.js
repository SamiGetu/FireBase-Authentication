export const DropMenu = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: "0%",
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1],
      type: "spring",
      stiffness: 120,
    },
  },
  exit: {
    x: "-100%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};
