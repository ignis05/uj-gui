import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './modules/app-routing.module'
import { MainScreenComponent } from './components/main-screen/main-screen.component'
import { KkmScreenComponent } from './components/kkm-screen/kkm-screen.component'
import { TicketScreenComponent } from './components/ticket-screen/ticket-screen.component'
import { TranslationModule } from './modules/translation.module'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatIconModule } from '@angular/material/icon'

@NgModule({
	declarations: [AppComponent, MainScreenComponent, KkmScreenComponent, TicketScreenComponent],
	imports: [BrowserModule, HttpClientModule, NgbModule, AppRoutingModule, TranslationModule, BrowserAnimationsModule, MatIconModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
