import { Component, OnDestroy, OnInit } from '@angular/core';
import { Link } from '../../model/link';
import { CardImagem } from "../card-imagem/card-imagem";

@Component({
  selector: 'app-header',
  imports: [CardImagem],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  titulo: string = "Meu Portfólio";

  link1: Link = {nome: "Home", url: "/"};
  link2: Link = {nome: "Sobre", url: "/sobre"};

  links: any = [ this.link1, this.link2];
  valorClickImagem!: boolean;

  usuarioLogado: boolean = false; 

  descricaoImagem: string = "Imagem que deveria estar funcionando.";


  receiveData(data: boolean) {
    this.valorClickImagem = data;
    console.log('Imagem foi clicada:', this.valorClickImagem);
  }

}
