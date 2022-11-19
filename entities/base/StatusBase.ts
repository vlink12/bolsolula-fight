export class StatusBase {
  constructor(
    private _vida: number,
    private _defesa: number,
    private _velocidade: number,
    private _ataque: number,
    private _ataqueEspecial: number
  ) {}
    
  public get vida() {
    return this._vida
  }
  public get defesa() {
    return this._defesa
  }
  public get velocidade() {
    return this._velocidade
  }
  public get ataque() {
    return this._ataque
  }
  public get ataqueEspecial() {
    return this._ataqueEspecial
  }
}