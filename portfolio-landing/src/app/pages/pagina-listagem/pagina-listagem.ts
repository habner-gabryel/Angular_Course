import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-pagina-listagem',
  imports: [],
  templateUrl: './pagina-listagem.html',
  styleUrl: './pagina-listagem.scss'
})
export class PaginaListagem implements OnInit {
  constructor(private dataService: DataService){}
 
  usuarios: any[] = [];

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios(): void {
    this.dataService.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios.push(data);
      },
      error: (erro) => {
        console.error("Erro ao carregar Usuários: ",erro);
      },
      complete: () => {
        console.log("Requisição foi completada");
      }
    });
  }

}
