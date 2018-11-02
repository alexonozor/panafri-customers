import { Component, OnInit } from '@angular/core';

import { Settings } from './shared/settings.model';
import { SettingsService } from './shared/settings.service';

@Component({
	moduleId: module.id,
	selector: 'settings',
	templateUrl: 'settings.component.html',
	providers: [SettingsService]
})

export class SettingsComponent implements OnInit {
	settings: Settings[] = [];

	constructor(private settingsService: SettingsService) { }

	ngOnInit() {
		this.settingsService.getList().subscribe((res) => {
			this.settings = res;
		});
	}
}