import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LancamentoPesquisaComponent } from './lancamento-pesquisa/lancamento-pesquisa.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';


@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      LancamentoPesquisaComponent,
      PessoaPesquisaComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      InputTextModule,
      ButtonModule,
      TableModule,
      TooltipModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
