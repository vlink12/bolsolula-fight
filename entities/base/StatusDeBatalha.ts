export class StatusDeBatalha {
  constructor(
    private _dano: number,
    private _danoMagico: number,
    private _vidaMaxima: number,
    private _vidaAtual: number,
  ) {}
    
  public get dano() {
    return this._dano
  }
  public get danoMagico() {
    return this._danoMagico
  }
  public get vidaMaxima() {
    return this._vidaMaxima
  }
  public get vidaAtual() {
    return this._vidaAtual
  }

  
  public set vidaAtual(v : number) {
    this._vidaAtual = v;
  }
}