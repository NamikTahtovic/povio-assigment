import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss']
})




export class CryptoListComponent implements OnInit {
  ELEMENT_DATA: any[] = [
    {rank: '1', price: 'Hydrogen', change: '1.0079', symbol: 'H'},
    {rank: '2', price: 'Helium', change: '4.0026', symbol: 'He'},
    {rank: '3', price: 'Lithium', change: '6.941', symbol: 'Li'},
    {rank: '4', price: 'Beryllium', change: '9.0122', symbol: 'Be'},
    {rank: '5', price: 'Boron', change: '10.811', symbol: 'B'},
    {rank: '6', price: 'Carbon', change: '12.0107', symbol: 'C'},
    {rank: '7', price: 'Nitrogen', change: '14.0067', symbol: 'N'},
    {rank: '8', price: 'Oxygen', change: '15.9994', symbol: 'O'},
    {rank: '9', price: 'Fluorine', change: '18.9984', symbol: 'F'},
    {rank: '10',price: 'Neon', change: '0.1797', symbol: 'Ne'},
  ];
  displayedColumns: string[] = ['rank', 'symbol', 'price', 'change'];
  dataSource = this.ELEMENT_DATA;

  constructor(private router: Router) { }
  
  ngOnInit(): void {

  }


  openDetails(selected: any): void {
    this.router.navigate(['/details', selected.rank]);
  }

}

