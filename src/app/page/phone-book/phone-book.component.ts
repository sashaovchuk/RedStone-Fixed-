import { Component, OnInit, TemplateRef } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { User } from 'src/app/shared/classes/new-user.class';
import { OrderPipe } from 'ngx-order-pipe';
import { ProductService } from 'src/app/shared/servisec/product.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css'],
  providers: [ ProductService ]
})
export class PhoneBookComponent implements OnInit {

  index: number;
  fName: string;
  lName: string;
  numPhone: string;
  editFname: string;
  editLname: string;
  editNumPhone: string;
  editIndex: number;
  arrayUsers: Array<IUser>
  users: Array<IUser> = [];
  order: string;
  arrowTop: string;
  arrowDown: string;
  reverse: boolean = false;
  search: string;
  phoneMask = ['+', '3', '8', ' ', '(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, public pip: OrderPipe, private productService: ProductService) {
    this.getP()
    this.users = pip.transform(this.users);
    console.log(this.users);
  }
  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.arrowTop = '▲';
      this.reverse = !this.reverse;
    }
    this.arrowDown = '▼';
    this.order = value;
  }
  private getP(): void{
    this.productService.getProduct().subscribe(
      data => {
        this.users = data
      },
      err => {
        console.log(err)
      }
    )
  }

  addUser(): void {
    const newUser: IUser = new User(
      0,
      this.fName,
      this.lName,
      this.numPhone
    )
    newUser.id = this.users.slice(-1)[0].id+1
    // this.users.push(newUser)
    this.fName = ''
    this.lName = ''
    this.numPhone = ''
    this.productService.setProduct(newUser).subscribe(
      () => {
        this.getP()
      }
    )
  }
  editUser(user: IUser): void {
    this.editFname = user.fName
    this.editLname = user.lName
    this.editNumPhone = user.numPhone
    this.editIndex = user.id
  }
  deleteUser(user: IUser): void {
    const idProduct = user.id
    this.productService.delProduct(idProduct).subscribe(
      () => {
        this.getP()
      }
    )
    // this.users.splice(this.index, 1)
  }
  editSaveChange(): void {
    const newUser: IUser = new User(
      this.editIndex,
      this.editFname,
      this.editLname,
      this.editNumPhone
    )
    this.productService.editProduct(newUser).subscribe(
      () => {
        this.getP()
      }
    )
    // this.users.splice(this.editIndex, 1, newUser)
    // this.editFname = ''
  }

}
