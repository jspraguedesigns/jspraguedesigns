import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-header',
  template: `<header>
    <div class="wrapper">
      <div>
      <div class="branding d-flex align-items-center">
                    <img src="../../assets/img/ETS-Logo-navy.svg" /> <h1>Program&reg; Application</h1>
                </div>
    </div>
  </header>`,
  styleUrls: ['./header.css'],
})
export default class HeaderComponent {
  @Input()
  user: unknown = null;

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();
}
