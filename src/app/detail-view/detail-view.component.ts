import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  @Input() products!: Product[];
  @Input() filter!: boolean;

  ngOnInit(): void {
    console.log('inside bottle view ', this.products)
  }

}
