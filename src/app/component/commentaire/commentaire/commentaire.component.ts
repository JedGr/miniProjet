import { Component, Input, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/class/commentaire';
import { Excursion } from 'src/app/class/excursion';

@Component({
  selector: 'jed-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
@Input()com:Commentaire=new Commentaire();
  constructor() { }

  ngOnInit(): void {
  }

}
