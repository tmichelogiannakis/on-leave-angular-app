import { Component, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  title = 'example-angular-app';

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: BeforeUnloadEvent) {
    console.log('window:beforeunload');
    console.log(event);
  }

  @HostListener('window:unload', ['$event'])
  unloadHandler(event: Event) {
    console.log('window:unload');
    console.log(event);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
