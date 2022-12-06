import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

import { DragScrollModule } from 'ngx-drag-scroll'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './modules/app-routing.module'
import { TranslationModule } from './modules/translation.module'
import { MainScreenComponent } from './components/main-screen/main-screen.component'
import { KkmScreenComponent } from './components/kkm-screen/kkm-screen.component'
import { TicketScreenComponent } from './components/ticket-screen/ticket-screen.component'
import { ActiveTicketsListComponent } from './components/active-tickets-list/active-tickets-list.component'
import { TicketActivationComponent } from './components/ticket-activation/ticket-activation.component'
import { KeybindExplainerComponent } from './components/keybind-explainer/keybind-explainer.component'
import { PaymentHandlerComponent } from './components/payment-handler/payment-handler.component'
import { ReactiveFormsModule } from '@angular/forms'
import { KeypadComponent } from './components/keypad/keypad.component'
import { TicketButtonComponent } from './components/ticket-button/ticket-button.component'
import { KkmTicketScreenComponent } from './components/kkm-ticket-screen/kkm-ticket-screen.component'
import { NbgDateFormatPipe } from './pipes/nbg-date-format.pipe'

@NgModule({
	declarations: [
		AppComponent,
		MainScreenComponent,
		KkmScreenComponent,
		TicketScreenComponent,
		ActiveTicketsListComponent,
		TicketActivationComponent,
		KeybindExplainerComponent,
		PaymentHandlerComponent,
		KeypadComponent,
		TicketButtonComponent,
		KkmTicketScreenComponent,
		NbgDateFormatPipe,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		NgbModule,
		AppRoutingModule,
		TranslationModule,
		BrowserAnimationsModule,
		MatIconModule,
		MatButtonModule,
		MatButtonToggleModule,
		ReactiveFormsModule,
		DragScrollModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
