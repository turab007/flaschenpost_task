import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private appService: AppService) {
  }

  detailView: boolean = false;
  data!: Product[];
  filter: boolean = false;
  sort: string = 'asc';

  ngOnInit(): void {
    this.appService.getData().subscribe(res => {
      this.data = res.sort((obj1, obj2) => {
        if (obj1.articles[0].price > obj2.articles[0].price) {
          return 1;
        }

        if (obj1.articles[0].price < obj2.articles[0].price) {
          return -1;
        }

        return 0;
      });
      let temp: Product[] = [];
      this.data.forEach((product, index) => {
        let text = product.articles[0].pricePerUnitText.match(/(\d|,)+/g).pop();
        let numb: number = +text
        product.articles[0].pricePerLiter= parseFloat(text.replace(/,/g, '.'));
      });

    })
  }

  changeView() {
    this.data = this.data;
    this.detailView = !this.detailView;

  }

  filterData() {
    this.filter = !this.filter;
  }

  changeOrder(event: any) {
    this.data = this.data.reverse();

  }


}
