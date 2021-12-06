import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Commentaire } from 'src/app/class/commentaire';
import { Excursion } from 'src/app/class/excursion';
import { ExcursionService } from 'src/app/services/excursion.service';
@Component({
  selector: 'jed-selected-excursion',
  templateUrl: './selected-excursion.component.html',
  styleUrls: ['./selected-excursion.component.css']
})
export class SelectedExcursionComponent implements OnInit {

display:boolean=false;
affiche(){
  this.display=!this.display;
}


  identifiant:number=0;
  prix:number=110;

lesexcursions: Excursion[]=[];

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private excursionService:ExcursionService) { }

  onListe(){
    this.router.navigate(['/liste']);
  }

  ngOnInit(): void {
    this.lesexcursions=this.excursionService.getExcursion();
    this.identifiant=this.activatedRoute.snapshot.params['id'];
    this.prix=this.activatedRoute.snapshot.params['prix'];



  }

}
