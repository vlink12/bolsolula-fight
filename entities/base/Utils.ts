export class Utils {
  static randomizar(min: number, max: number) {
    return Math.round(min + Math.random() * (max - min));
  } 
  
  static sortear(winPorcentageIntenger=50) {
    return this.randomizar(1, 100) <= winPorcentageIntenger;
  }
}