import { Negociacao } from './models/negociacao.js';
const negociacao = new Negociacao(new Date(), 5, 100);
console.log(negociacao);
// negociacao.quantidade = 1000;
console.log(negociacao.data, negociacao.quantidade, negociacao.valor, negociacao.volume);
