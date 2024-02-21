import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserve } from 'src/app/pages/Reserve/Reserve';
import { ReserveService } from 'src/app/services/reserve.service';

@Component({
  selector: 'app-list-reserve',
  templateUrl: './list-reserve.component.html',
  styleUrls: ['./list-reserve.component.scss']
})
export class ListReserveComponent implements OnInit {

  reserve:Reserve[];


  constructor(private reserveService:ReserveService, private router:Router){}
  ngOnInit(): void { 

    this.obtenerListaReservas();
  }

  private obtenerListaReservas(){
    this.reserveService.getReserve().subscribe(dato=>{
      this.reserve= dato;
    });
  }

}
