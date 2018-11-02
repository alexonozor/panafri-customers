import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { NotificationsComponent } from './notifications.component';
import { NotificationsService } from './shared/notifications.service';
import { Notifications } from './shared/notifications.model';

describe('a notifications component', () => {
	let component: NotificationsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: NotificationsService, useClass: MockNotificationsService },
				NotificationsComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([NotificationsComponent], (NotificationsComponent) => {
		component = NotificationsComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original notifications service
class MockNotificationsService extends NotificationsService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
