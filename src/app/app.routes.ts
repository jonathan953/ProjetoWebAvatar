import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/home-page.component';
import { HospedagensPageComponent } from './features/hospedagens/hospedagens-page.component';
import { CadastroPageComponent } from './features/cadastro/cadastro-page.component';

export const appRoutes: Routes = [
  { path: '', component: HomePageComponent, title: 'Avatar | Início' },
  { path: 'hospedagens', component: HospedagensPageComponent, title: 'Avatar | Hospedagens' },
  { path: 'cadastro', component: CadastroPageComponent, title: 'Avatar | Cadastro' },
  { path: '**', redirectTo: '' }
];
