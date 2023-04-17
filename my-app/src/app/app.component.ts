import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductsService],
})
export class AppComponent {
  show: boolean = true;
  setPopup: boolean = false;
  drodownText: string = '';
  Products: { name: string; quantity: number; price: number }[] = [];

  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    this.Products = this.productsService.Products;
  }

  btnClickHanlder() {
    console.log('Button clicked');
  }

  getInputText(inputText: string) {
    console.log(inputText);
  }

  getSelectedText(selectedText: string) {
    console.log(selectedText);
  }

  getSelectedDropText(selectedText: string) {
    this.drodownText = selectedText;
    this.setPopup = false;
  }

  opencloseDropDown() {}
}
