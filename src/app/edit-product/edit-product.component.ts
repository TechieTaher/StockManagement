import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { prods } from '../list-product/list-product.component';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(prods[this.id - 1].pId);
  }

}
