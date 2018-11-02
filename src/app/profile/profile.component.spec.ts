import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { ProfileComponent } from './profile.component';
import { ProfileService } from './shared/profile.service';
import { Profile } from './shared/profile.model';

describe('a profile component', () => {
	let component: ProfileComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: ProfileService, useClass: MockProfileService },
				ProfileComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ProfileComponent], (ProfileComponent) => {
		component = ProfileComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original profile service
class MockProfileService extends ProfileService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
