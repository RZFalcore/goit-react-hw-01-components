const RandomColor = () => {
  const color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256,
  )},${Math.floor(Math.random() * 256)})`;
  return color;
};

export default RandomColor;
