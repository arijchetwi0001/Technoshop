import { Component, OnInit } from '@angular/core';
import { Produit } from '../services/app.service';

@Component({
  selector: 'app-accessoire',
  templateUrl: './accessoire.component.html',
  styleUrls: ['./accessoire.component.css']
})
export class AccessoireComponent implements OnInit {
  accessoire:{img : string ;nom : string; prix : string; carac:string; stock:string} [] | undefined;
  constructor(private produit:Produit) { }

  ngOnInit(): void {
    this.accessoire= this.produit.accessoire;
  }

}
