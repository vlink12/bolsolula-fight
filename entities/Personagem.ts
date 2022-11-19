import { StatusBase } from './base/StatusBase';
import { StatusDeBatalha } from './base/StatusDeBatalha';
import { Utils } from './base/Utils';

export abstract class Personagem {
  nome: string;
  statusBase: StatusBase;
  statusDeBatalha: StatusDeBatalha;
  
  constructor(nome: string, status: StatusBase) {
    this.nome = nome;
    this.statusBase = status;
    this.statusDeBatalha = new StatusDeBatalha(
      status.ataque * 10,
      status.ataqueEspecial * 20,
      status.vida * 100,
      status.vida * 100,
    )
  }

  private desviei() {
    return Utils.sortear(this.statusBase.velocidade * 0.5)
  }

  private calcularDanoRecebido(dano: number) {
    const danoBloqueado = this.statusBase.defesa * 0.25;

    if (danoBloqueado > dano) return 0;

    return dano - danoBloqueado;
  }

  public receberAtaque(dano: number) {
    const danoRecebido = this.calcularDanoRecebido(dano)

    if (this.desviei()) {
      return;
    }

    this.statusDeBatalha.vidaAtual -= danoRecebido;

    if (this.statusDeBatalha.vidaAtual <= 0) {
      throw new Error("MORRI");
    }
  }

  public calcularVida() {
    const vidaRecuperada = this.statusDeBatalha.vidaMaxima * 0.1;

    if (this.statusDeBatalha.vidaAtual + vidaRecuperada > this.statusDeBatalha.vidaMaxima) {
      this.statusDeBatalha.vidaAtual = this.statusDeBatalha.vidaMaxima
      return;
    }

    this.statusDeBatalha.vidaAtual += vidaRecuperada;
  }

  abstract ataque(alvo: Personagem): void;
  abstract ataqueEspecial(alvo: Personagem): void;
  abstract recuperarVida(): void;
}