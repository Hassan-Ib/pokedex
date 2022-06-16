export default class RandomRgbColor {
  private rgb: number[];
  constructor() {
    this.rgb = this.genterateRgb();
  }
  private genterateRgb(): number[] {
    return [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];
  }

  public getRgb(): number[] {
    return this.rgb;
  }
  getColor(): string {
    return `rgb(${this.rgb[0]}, ${this.rgb[1]}, ${this.rgb[2]})`;
  }
  public getLighterColor(): string {
    const lighterRgb = this.rgb.map((el) => {
      return el < 200 ? el + 10 : el - 60;
    });
    return `rgb(${lighterRgb[0]}, ${lighterRgb[1]}, ${lighterRgb[2]})`;
  }
}
