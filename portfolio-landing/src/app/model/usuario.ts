export interface Usuario {
    id: number;
    nome: string;
    idade: number;
    email: string;
    cargo?: Cargo;
}


export interface Cargo {
    id: number;
    nome: string;
    regras: Regra[];
}


export interface Regra {
    id: number;
    descricao: string;
}