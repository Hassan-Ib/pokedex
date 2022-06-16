export class DecimeterConvertion {
  static toFoot(value: number): string {
    const _ONE_DEC_TO_FOOT = 0.328084;
    return (value * _ONE_DEC_TO_FOOT).toFixed(2).replace(".", "'") + '"';
  }
  static toMeter(value: number): string {
    const _ONE_DEC_TO_METER = 0.1;

    return (value * _ONE_DEC_TO_METER).toFixed(2);
  }
}

export class HextogramConvertion {
  static toKilogram(value: number): number {
    const _ONE_HEX_TO_KILO = 0.1;
    return Math.ceil(value * _ONE_HEX_TO_KILO);
  }
  static toPounds(value: number) {
    const _ONE_HEX_TO_LBS = 0.220462;
    return (value * _ONE_HEX_TO_LBS).toFixed(2);
  }
}
