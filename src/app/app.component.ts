import { Component } from '@angular/core';
import { Appareil } from './appareil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bonjour';
  isAuth :boolean =false;
  appareils: Appareil [];
  appareilOne: string="Iphone";
  appareilTwo: string="Ordinateur";
  appareilThree: string="Frigo";
  constructor(){
    setTimeout(
      () => {
        //TODO 
        this.isAuth= true;
      },
      4000
    );
    this.appareils = [
      {
        name: 'Iphone',
        status: true
      },
      {
        name: 'Ordinateur',
        status: false
      },
      {
        name: 'Frigo',
        status: true
      }
    ];
}
onAllume(){
  console.log('on allume tout!');
}
}
