import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { PageLoginModule } from './components/page-login/page-login.module';
import { PageMainModule } from './components/page-main/page-main.module';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		HttpClientModule,
		PageLoginModule,
		PageMainModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
