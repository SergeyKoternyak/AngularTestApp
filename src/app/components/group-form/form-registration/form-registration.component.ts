import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
	selector: 'form-registration',
	templateUrl: 'form-registration.component.html',
	styleUrls: ['form-registration.component.less']
})
export class FormRegistrationComponent implements OnInit {
	constructor(private fb: FormBuilder, private userService: UserService) {}

	registrationForm: FormGroup;

	formErrors = {
		name: '',
		email: '',
		password: ''
	};

	validationMessages = {
		name: {
			required: 'Обязательное поле',
			minlength: 'Имя должно быть не менее 4х символов.'
		},
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
		this.registrationForm = this.fb.group({
			name: ['', [
				Validators.required,
				Validators.minLength(4)
			]],
			email: ['', [
				Validators.required,
				Validators.pattern("[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}")
			]],
			password: ['', [
				Validators.required,
				Validators.minLength(4)
			]],
		});

		this.registrationForm.valueChanges.subscribe(data => this.onValueChange(data));

		this.onValueChange();
	}

	onValueChange(data?: any) {
		if (!this.registrationForm) return;
		let form = this.registrationForm;

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
		this.userService.registration(this.registrationForm.value).subscribe(
			(data) => {
				console.log(data);
			}
		);
	}
}
