import { Routes } from '@angular/router';
import { Header } from './component/header/header';
import { PaginaCadastro } from './pages/pagina-cadastro/pagina-cadastro';
import { PaginaContagem } from './pages/pagina-contagem/pagina-contagem';

export const routes: Routes = [
    {
        path: '',
        component: Header,
    },
    {
        path: 'cadastro',
        component: PaginaCadastro,
    },
    {
        path: 'contagem',
        component: PaginaContagem,        
    }
];
