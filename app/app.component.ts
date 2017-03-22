import {Component} from '@angular/core';
import {Router, Event, NavigationEnd} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
	selector: 'htaccess24',
	templateUrl: './app/templates/app.component.html',
	styleUrls: ['./app/styles/app.component.css'],
})

export class AppComponent {
	currentRoute: string;

	constructor (_router: Router) {
		if (localStorage.getItem('guid') === null) {
			localStorage.setItem('guid', ''+ Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, '').substr(0, 32) +'');
		}


		_router.events.filter(event => event instanceof NavigationEnd).subscribe((event:Event) => {
			this.routeChanged(event.url);
		});

		console.log("App Component");
	}

	private routeChanged(route: string) {
		document.body.scrollTop = 0;

		return this.currentRoute = '' + route;
		/*console.log('Path changed: ' + route);*/
	}

}