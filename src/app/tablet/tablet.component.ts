import { Component, OnInit } from '@angular/core';
import { Produit } from '../services/app.service';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.css']
})
export class TabletComponent implements OnInit {
  tablet:{img : string ;nom : string; prix : string; carac:string; stock:string} [] | undefined;
  constructor(private produit:Produit) { }

  ngOnInit(): void {
    this.tablet= this.produit.tablet;
  }
}
