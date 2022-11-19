import { StatusBase } from './base/StatusBase';
import { Personagem } from './Personagem';

export class Bolsonaro extends Personagem {
  constructor() {
    const status = new StatusBase(
      100,
      100,
      50,
      100,
      150,
    );
    
    super("Bolsonaro", status)
  }

  ataque(alvo: Personagem): void {
    console.log(`${this.nome} deu um tiro no ${alvo.nome}, taok?`)

    alvo.receberAtaque(this.statusDeBatalha.dano);
  }

  ataqueEspecial(alvo: Personagem): void {
    console.log(`${this.nome} xingou 10 minorias!, taok?`)

    alvo.receberAtaque(this.statusDeBatalha.danoMagico);
  }

  recuperarVida(): void {
    console.log(`${this.nome} esvaziou sua bolsa de coco, taok?`)

    this.calcularVida();
  }
}