import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}
  title = 'Convertisseur de devise';
  fcfa = new Devise('FCFA', 'XAF');
  euro = new Devise('Euro', 'EUR');
  dollar = new Devise('Dollar us', 'USD');
  listeDevise = [
    this.dollar,
    this.fcfa,
    this.euro,
    
   
  ];
  depart = this.dollar;
  arrivee = this.euro;
  public value=0;
  public value2=0;

}

class Devise {
  name:String = '';
  code:String = '';
  constructor(name: string, code: string){
      this.name = name;
      this.code = code;
  }
}
