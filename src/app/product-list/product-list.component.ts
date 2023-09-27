import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      name: 'Camiseta Angular',
      description: 'Camiseta com o logo do Angular',
      imageUrl: 'assets/angular-shirt.jpg',
      price: 25.0
    },
    {
      name: 'Caneca Angular',
      description: 'Caneca personalizada com o logo do Angular',
      imageUrl: 'assets/angular-mug.jpg',
      price: 12.0
    }
    // Adicione mais produtos à lista conforme necessário
  ];

  addToCart(product: Product): void {
    // Implemente a lógica para adicionar o produto ao carrinho aqui
    // Você pode usar um serviço de carrinho ou uma variável no componente
    // para controlar os itens no carrinho.
  }
}

interface Product {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}
