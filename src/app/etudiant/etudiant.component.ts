import { Component } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
})
export class EtudiantComponent {
  etudiants = [
    {
      nom: 'Sakli',
      prenom: 'Eya',
      photo: 'assets/Eya.jpg',
      dateNaissance: new Date(2002, 9, 5),
      moyenne: 12.37,
      boursier: false,
      ville: 'Tunis',
      option: 'DSI',
    },
    {
      nom: 'Mrad',
      prenom: 'Yassine',
      photo: 'assets/Yassine.jpg',
      dateNaissance: new Date(2001, 4, 28),
      moyenne: 9.95,
      boursier: false,
      ville: 'Nabeul',
      option: 'RSI',
    },
    {
      nom: 'Safi',
      prenom: 'Sarra',
      photo: 'assets/Sarra.jpg',
      dateNaissance: new Date(2003, 2, 3),
      moyenne: 14.58,
      boursier: true,
      ville: 'Sfax',
      option: 'DSI',
    },
    {
      nom: 'Mensi',
      prenom: 'Omar',
      photo: 'assets/Omar.jpg',
      dateNaissance: new Date(2002, 8, 15),
      moyenne: 16.77,
      boursier: true,
      ville: 'Kef',
      option: 'SEM',
    },
  ];
  test: boolean = false;
  indices: number = 0;
  test2: boolean = false;
  Affiche(val: number) {
    this.test = true;
    this.indices = val;
  }
  Affiche2(val: number) {
    this.test2 = true;
    this.indices = val;
  }
}
