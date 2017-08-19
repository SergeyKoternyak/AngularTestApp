import { Component } from '@angular/core';

@Component({
	selector: 'group-form',
	templateUrl: 'group-form.component.html',
	styleUrls: ['group-form.component.less']
})
export class GroupFormComponent {
	activeTab = 'signIn';

	showTab(tabName: string) {
		this.activeTab = tabName;
	}

	isActiveTab(tabName: string): boolean {
		return this.activeTab === tabName;
	}
	
	onSuccessRegistration() {
		this.activeTab = 'signIn';
	}
}