import { Bolsonaro } from './entities/Bolsonaro';
import { Lula } from './entities/Lula';

const Bozo = new Bolsonaro();

const Preso = new Lula();


Bozo.ataque(Preso);
console.table(Preso.statusDeBatalha)

Preso.ataqueEspecial(Bozo);
console.table(Bozo.statusDeBatalha)

Bozo.ataqueEspecial(Preso);
console.table(Preso.statusDeBatalha)

Preso.recuperarVida();
console.table(Preso.statusDeBatalha)

Bozo.ataque(Preso);
console.table(Preso.statusDeBatalha)

Preso.ataqueEspecial(Bozo)
console.table(Bozo.statusDeBatalha)

Bozo.recuperarVida();
console.table(Bozo.statusDeBatalha)

