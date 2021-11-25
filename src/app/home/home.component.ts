import { Component, OnInit } from '@angular/core';
import { Produit } from '../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home:{img : string ;nom : string; prix : string; carac:string; stock:string} [] | undefined;
  constructor(private produit:Produit) { }

  ngOnInit(): void {
    this.home= this.produit.home;
  }
}
