import { Component, Input , OnInit} from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-bottle-view',
  templateUrl: './bottle-view.component.html',
  styleUrls: ['./bottle-view.component.css']
})
export class BottleViewComponent implements OnInit {
  constructor() {}

  @Input() products!: Product[];

  ngOnInit(): void {
    console.log('inside bottle view ', this.products)
  }


}
