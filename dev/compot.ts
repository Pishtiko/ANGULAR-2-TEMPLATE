import {Component} from 'angular2/core';
import {ContactListComponent} from './contacts/components/contact-list.component';
import {AboutComponent} from './about/about.component';
import {NewContactComponent} from './contacts/components/newcontact.component';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {HTTPTestComponent} from './http/http-test.component';

@Component({
    selector: 'app',
    templateUrl: 'dev/app.component.html',
    directives: [ROUTER_DIRECTIVES, HTTPTestComponent]
})
@RouteConfig([
    {path: '/', component: ContactListComponent, name: 'Contacts', useAsDefault: true},
    {path: '/new', component: NewContactComponent, name: 'Newcontact'},
    {path: '/about/:contactid', component: AboutComponent, name: 'About'}
])
export class AppComponent {
}
