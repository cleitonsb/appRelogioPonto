import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private relogio = '10:10:15';

  constructor() {}

  ngOnInit() {
    setInterval(this.meuRelogio.bind(this), 1000);
  }

  meuRelogio() {
    var d = new Date(), displayDate;
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
      displayDate = d.toLocaleTimeString('pt-BR');
    } else {
      displayDate = d.toLocaleTimeString('pt-BR', {timeZone: 'America/Belem'});
    }

    this.relogio = displayDate;
  }



}
