import { Component, OnInit } from '@angular/core';
import { Produit } from '../services/app.service';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PcComponent implements OnInit {
  pc:{img : string ;nom : string; prix : string; carac:string; stock:string} [] | undefined;
  constructor(private produit:Produit) { }

  ngOnInit(): void {
    this.pc= this.produit.pc;
  }
}
