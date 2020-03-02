import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { prods } from '../list-product/list-product.component'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProduct: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.addProduct = this.formBuilder.group({
      pId: [''],
      pName: [''],
      pPrice: [''],
      pQuantity: [''],
      pDesc: [''],
      pSupplier: [''],
      pContact: [''],
      pAddress: ['']
    })

  }
  addproduct() {
    prods.push({
      'pId': this.addProduct.controls.pId.value,
      'pName': this.addProduct.controls.pName.value,
      'pPrice': this.addProduct.controls.pPrice.value,
      'pQuantity': this.addProduct.controls.pQuantity.value,
      'pDesc': this.addProduct.controls.pDesc.value,
      'pSupplier': this.addProduct.controls.pSupplier.value,
      'pContact': this.addProduct.controls.pContact.value,
      'pAddress': this.addProduct.controls.pAddress.value
    })
    this.router.navigateByUrl("product");
  }

}
