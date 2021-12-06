import { Component, OnInit } from '@angular/core';
import { ExcursionService } from 'src/app/services/excursion.service';
import { ActivatedRoute } from '@angular/router';

import { Excursion } from 'src/app/class/excursion';
@Component({
  selector: 'jed-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  lesexcursions:Excursion[]=[];
  constructor(private excursionService:ExcursionService) { }

  ngOnInit(): void {
    this.lesexcursions=this.excursionService.getExcursion();
  }

}
