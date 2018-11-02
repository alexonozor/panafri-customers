import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { SettingsComponent } from './settings.component';
import { SettingsService } from './shared/settings.service';
import { Settings } from './shared/settings.model';

describe('a settings component', () => {
	let component: SettingsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: SettingsService, useClass: MockSettingsService },
				SettingsComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SettingsComponent], (SettingsComponent) => {
		component = SettingsComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original settings service
class MockSettingsService extends SettingsService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
