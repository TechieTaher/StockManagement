import { Component, OnInit } from '@angular/core';
export const prods = [
  {
    'pId': 1, 'pName': 'Oreo Biscuit', 'pPrice': 4, 'pQuantity': '55', 'pDesc': 'Awesome', 'pSupplier': 'Mukesh Bhau', 'pContact': '123456', 'pAddress': 'Nai Sadak'
  },
  {
    'pId': 2, 'pName': 'Oreo Biscuit', 'pPrice': 4, 'pQuantity': '55', 'pDesc': 'Awesome', 'pSupplier': 'Mukesh Bhau', 'pContact': '123456', 'pAddress': 'Nai Sadak'
  },
  {
    'pId': 3, 'pName': 'Oreo Biscuit', 'pPrice': 4, 'pQuantity': '55', 'pDesc': 'Awesome', 'pSupplier': 'Mukesh Bhau', 'pContact': '123456', 'pAddress': 'Nai Sadak'

  }
]
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products = prods;
  constructor() { }

  ngOnInit(): void {
  }

}
