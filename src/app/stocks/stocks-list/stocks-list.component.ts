import { Component} from '@angular/core';
import { Http } from '@angular/http';
import { StocksService } from '../../services/stocks.service';
import { Stocks } from '../stocks';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss']
})
export class StocksListComponent {

  constructor(private http: Http, stocks: Stocks) { }

  ngOnInit() {
  }

}
