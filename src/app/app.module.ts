import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './modules/app-routing.module'
import { TranslationModule } from './modules/translation.module'
import { MainScreenComponent } from './components/main-screen/main-screen.component'
import { KkmScreenComponent } from './components/kkm-screen/kkm-screen.component'
import { TicketScreenComponent } from './components/ticket-screen/ticket-screen.component';
import { ActiveTicketsListComponent } from './components/active-tickets-list/active-tickets-list.component'

@NgModule({
	declarations: [AppComponent, MainScreenComponent, KkmScreenComponent, TicketScreenComponent, ActiveTicketsListComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		NgbModule,
		AppRoutingModule,
		TranslationModule,
		BrowserAnimationsModule,
		MatIconModule,
		MatButtonModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
