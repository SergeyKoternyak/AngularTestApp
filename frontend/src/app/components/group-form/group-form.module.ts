import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRegistrationComponent } from './form-registration/form-registration.component';
import { GroupFormComponent } from './group-form.component';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [
		FormLoginComponent,
		FormRegistrationComponent,
		GroupFormComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule
	],
	exports: [GroupFormComponent]
})
export class GroupFormModule {}