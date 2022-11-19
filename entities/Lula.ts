import { StatusBase } from './base/StatusBase';
import { Personagem } from './Personagem';

export class Lula extends Personagem {
  constructor() {
    const status = new StatusBase(
      200,
      200,
      20,
      50,
      100,
    );
    
    super("Lula", status)
  }

  ataque(alvo: Personagem): void {
    console.log(`${this.nome} deu uma facada no companheiro ${alvo.nome}!`)

    alvo.receberAtaque(this.statusDeBatalha.dano);
  }

  ataqueEspecial(alvo: Personagem): void {
    console.log(`${this.nome} patrocinou a picanha do companheiro ${alvo.nome}!`)

    alvo.receberAtaque(this.statusDeBatalha.danoMagico);
  }

  recuperarVida(): void {
    console.log(`${this.nome} militou na internet!`)

    this.calcularVida();
  }
}