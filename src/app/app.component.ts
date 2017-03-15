import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<nav>
              <a routerLink="/profile">Profile</a>
            </nav>
            <router-outlet></router-outlet>`,
})
export class AppComponent { name = 'Snooz'; }
