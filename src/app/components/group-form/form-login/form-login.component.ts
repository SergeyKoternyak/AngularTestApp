import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
	selector: 'form-login',
	templateUrl: 'form-login.component.html',
	styleUrls: ['form-login.component.less']
})
export class FormLoginComponent implements OnInit {
	constructor(private fb: FormBuilder, private userService: UserService) {}

	loginForm: FormGroup;

	formErrors = {
		email: '',
		password: ''
	};

	validationMessages = {
		email: {
			required: 'Обязательное поле',
			pattern: 'Не правильный формат email адреса'
		},
		password: {
			required: 'Обязательное поле',
			minlength: 'Пароль должен быть не менее 4х символов.'
		}  
	};

	ngOnInit() {
		this.buildForm();
	}

	buildForm() {
		this.loginForm = this.fb.group({
			email: ['', [
				Validators.required,
				Validators.pattern("[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}")
			]],
			password: ['', [
				Validators.required,
				Validators.minLength(4)
			]],
		});

		this.loginForm.valueChanges.subscribe(data => this.onValueChange(data));

		this.onValueChange();
	}

	onValueChange(data?: any) {
		if (!this.loginForm) return;
		let form = this.loginForm;

		for (let field in this.formErrors) {
			this.formErrors[field] = '';
			let control = form.get(field);

			if (control && control.dirty && !control.valid) {
				let message = this.validationMessages[field];
				for (let key in control.errors) {
					this.formErrors[field] += message[key] + '';
				}
			}
		}
	}

	onSubmit() {
		this.userService.login(this.loginForm.value).subscribe(
			(data) => {}
		);
	}
}
