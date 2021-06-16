import { Component, Input, Output, EventEmitter } from '@angular/core';
import {faChevronDown, faQuestionCircle, faUserCircle} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'ets-header',
  templateUrl: `./header.component.html`,
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {

  faChevronDown = faChevronDown;
  faQuestionCircle = faQuestionCircle;
  faUserCircle = faUserCircle;
  @Input()
  user: unknown = null;

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();
}
