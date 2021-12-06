import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jed-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
alertt(){
  alert("Votre message à été envoyé avec success");
}
  constructor() { }

  ngOnInit(): void {
  }

}
