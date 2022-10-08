const colors = ["#00252a", "#680000", "#9fa100", "#460088"];
let index = 0;
function getColor() {
  const currentColor = colors[index];
  index++;
  if (index > 3) {
    index = 0;
  }
  return currentColor;
}

export default getColor;
