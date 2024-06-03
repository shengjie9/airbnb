const theme = {
  color: {
    primary: "#ff385c",
  },
  text: {
    primary: "#222222",
    secondary: "#6a6a6a",
  },
  boxShadowAnimation: `
  transition: box-shadow 200ms ease;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  }`,
  boxShadow: `box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);`,
};

export default theme;
