import { Routes } from '@angular/router';
import { Header } from './component/header/header';

export const routes: Routes = [
    {
        path: '',
        component: Header,
    },
    {
        path: 'header',
        component: Header,
    }
];
