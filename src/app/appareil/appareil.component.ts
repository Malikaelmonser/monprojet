import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input()
appareilName:String ='Machine a laver';
@Input()
appareilStatus: boolean = false;
  constructor() { }

  ngOnInit() {
  }
getStatus()
{
  return this.appareilStatus ?'allumé':'éteint';
}
getColor() {
  if (this.appareilStatus) {
    return 'green';
  } else {
    return 'red';
  }
}
}
