import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.scss']
})
export class CryptoDetailsComponent implements OnInit {
  currencys: any[] = [
    {value: 'usd', viewValue: 'USD'},
    {value: 'eur', viewValue: 'EUR'},
    {value: 'cny', viewValue: 'CNY'}
  ];
  ELEMENT_DATA: any[] = [
    {rank: '1', name: 'Hydrogen', symbol: '1.0079', price: 'H', price_bitcoin: '111', one_hour_change: '222', all_day_change: '333', week_change: '44', total_supply: '100'},
  ];
  displayedColumns: string[] = ['rank', 'name', 'symbol', 'price', 'price_bitcoin', 'one_hour_change', 'all_day_change', 'week_change', 'total_supply'];
  dataSource = this.ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
