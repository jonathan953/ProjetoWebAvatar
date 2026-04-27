export type HospedagemId = 'montanhas-flutuantes' | 'grande-arvore' | 'jardim-sagrado' | 'floresta-neon';

export interface HospedagemOption {
  id: HospedagemId;
  nome: string;
  descricao: string;
  imagemFundo: string;
  resumo: string;
  custoPorPessoa: number;
  taxaTransladoPorPessoa: number;
  alinhamento?: 'left' | 'right';
}

export interface TravelBooking {
  nome: string;
  email: string;
  dataNascimento: string;
  quantidadePessoas: number;
  dataViagem: string;
  hospedagemId: HospedagemId;
  hospedagemNome: string;
  valorHospedagem: number;
  valorTranslado: number;
  valorFinal: number;
  criadoEm: string;
}
