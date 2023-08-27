import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'udemy-angular-section-05';
  
  loadedFeature = 'shopping-list';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
