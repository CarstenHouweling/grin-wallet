import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {AppMaterialModule} from "./app-material.module";

import {AppComponent} from './app.component';
import {MainComponent} from "./components/main/main.component";
import {WalletService} from "./services/wallet.service";
import {DialogInfoComponent} from "./components/dialog_info/dialogInfo.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DialogInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [
    WalletService
  ],
  entryComponents: [
    DialogInfoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
