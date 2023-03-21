import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'pm-product-list',
  styleUrls: ['./product-list.component.css'],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  pageTitle = 'Products';

  @Input() errorMessage: string;
  @Input() displayCode: boolean;
  @Input() products: Product[];
  @Input() selectedProduct: Product;

  @Output() displayCodeChanged = new EventEmitter<boolean>();
  @Output() initNewProduct = new EventEmitter<void>();
  @Output() productWasSelected = new EventEmitter<Product>();

  checkChanged(): void {
    this.displayCodeChanged.emit();
  }
  newProduct(): void {
    this.initNewProduct.emit();
  }
  productSelected(product: Product): void {
    this.productWasSelected.emit(product);
  }
}
