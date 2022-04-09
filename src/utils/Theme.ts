const getRandow255 = () => Math.floor(Math.random() * 255);

export const randomRgba = () => {
  const r = getRandow255();
  const g = getRandow255();
  const b = getRandow255();
  return [r, g, b];
};

export const oppositeRgb = (rgb: number[]) =>
  rgb.map((el) => {
    // if (el < 200) {
    //     return el + 40
    // } else {
    //   return   el  - 40
    // }
    return el < 200 ? el + 10 : el - 60;
  });
