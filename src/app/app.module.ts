import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { FooterComponent } from './components/footer/footer.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { FormsModule } from '@angular/forms';

import { ConexionbdService } from './services/conexionbd.service';
import { ListaComponent } from './components/lista/lista.component';
import { ListaaddComponent } from './components/listaadd/listaadd.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    ListaComponent,
    ListaaddComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    FormsModule

  ],
  providers: [
    ConexionbdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
