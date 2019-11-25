import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { ProdDetService } from 'src/app/shared/servisec/prod-det.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ ProdDetService ]
})
export class ProductsComponent implements OnInit {
  product: IUser
  productId: number = 1
  constructor(private productDetailService: ProdDetService, private route: ActivatedRoute) {
    this.getDetails()
   }

  ngOnInit() {
  }
  public getDetails() : void{
    this.productId = Number(this.route.snapshot.paramMap.get('id'))
    this.productDetailService.getProdDet(this.productId).subscribe(
      data => {
        this.product = data
      },
      err => {
         console.log(err)
      }
    )
  }
}
