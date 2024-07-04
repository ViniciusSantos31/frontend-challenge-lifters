export interface iProduct {
  titulo: string;
  valor: string;
  descricao: string;
  categoria: string;
  cores: Cor[];
  tamanhos: string[];
  fotos: Foto[];
  slug: string;
}

export interface Cor {
  nome: string;
  codigo: string;
}

export interface Foto {
  url: string;
  capa: boolean;
}
