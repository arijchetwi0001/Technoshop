import { Component, OnInit } from '@angular/core';
import { Produit } from '../services/app.service';

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.css']
})
export class TelephoneComponent implements OnInit {
telephone:{img : string ;nom : string; prix : string; carac:string; stock:string} [] | undefined;
  constructor(private produit:Produit) { }

  ngOnInit(): void {
    this.telephone= this.produit.telephone;
  }

}
