import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { KkmScreenComponent } from '../components/kkm-screen/kkm-screen.component'
import { MainScreenComponent } from '../components/main-screen/main-screen.component'
import { TicketScreenComponent } from '../components/ticket-screen/ticket-screen.component'

const routes: Routes = [
	{ path: 'index.html', redirectTo: '/', pathMatch: 'full' },
	{ path: '', component: MainScreenComponent, pathMatch: 'full' },
	{ path: 'tickets', component: TicketScreenComponent },
	{ path: 'kkm', component: KkmScreenComponent },
]

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
