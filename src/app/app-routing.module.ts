import { NgModule } from '@angular/core';
import { PageLoginComponent } from './components/page-login/page-login.component';
import { PageMainComponent } from './components/page-main/page-main.component';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{
				path: '',
				redirectTo: 'login',
				pathMatch: 'full'
			},
			{
				path: 'login',
				component: PageLoginComponent
			},
			{
				path: 'main',
				component: PageMainComponent
			}
		])
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
