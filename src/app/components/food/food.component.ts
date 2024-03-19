import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/shared-service.service';
interface FoodItem {
  name: string;
  price: number;
}

interface Order {
  selectedFood: FoodItem;
  quantity: number;
  totalCost: number;
}


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  foodItems: FoodItem[] = [
    { name: 'Pizza', price: 10 },
    { name: 'Burger', price: 25 },
    { name: 'Sandwich', price: 35 },
    { name: 'Hot Dog', price: 45 },
    { name: 'Cupcake', price: 65 },
    { name: 'Ice Cream Sandwich', price: 75 },
    { name: 'Donut', price: 85 }
  ];


  orders: Order[] = [];
  selectedFood!: FoodItem;
  quantity: number = 1;
  totalCost: number = 0;

  constructor(
    private readonly router: Router,
    private readonly localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.orders = this.localStorageService.getItem('orders') as Order[] || [];
    this.selectedFood = this.localStorageService.getItem('selectedFood');
    this.calculateTotalCost();
  }

  calculateTotalCost(): void {
    if (this.selectedFood) {
      this.totalCost = this.selectedFood.price * this.quantity;
    } else {
      this.totalCost = 0;
    }
  }

  onFoodSelection(): void {
    this.calculateTotalCost();
  }

  onQuantityChange(): void {
    this.calculateTotalCost();
  }

  order(): void {
    if (!this.selectedFood || this.quantity <= 0) {
      alert('Please complete the form before placing the order.');
      return;
    }

    const orderData: Order = {
      selectedFood: this.selectedFood,
      quantity: this.quantity,
      totalCost: this.totalCost
    };
    this.orders.push(orderData);

    this.localStorageService.setItem('orders', this.orders);

    alert('Order successful');
  }
}

// interface FoodItem {
//   name: string;
//   price: number;
//   // quntity:number;
// }

// @Component({
//     selector: 'app-food',
//     templateUrl: './food.component.html',
//     styleUrls: ['./food.component.css']
//   })

//   export class FoodComponent{
//     menuItems: FoodItem[] = [
//           { name: 'Pizza', price: 10 },
//           { name: 'Burger', price: 25 },
//           { name: 'Sandwich', price: 35 },
//           { name: 'Hot Dog', price: 45 },
//           { name: 'Cupcake', price: 65 },
//           { name: 'Ice Cream Sandwich', price: 75 },
//           { name: 'Donut', price: 85 }
//     ]

//     selectedItems: FoodItem[] = [];
//     totalCost = 0;
//     userId = '';


//     handleItemClick(item: FoodItem): void {
//       this.selectedItems.push(item);
//       this.calculateTotalCost();
//     }

//     calculateTotalCost(): void {
//       this.totalCost = this.selectedItems.reduce((acc, item) => acc + item.price, 0);
//     }

//     handleSaveClick(): void {
//       const data = { userId: this.userId, items: this.selectedItems, totalCost: this.totalCost };
//       this.saveDataToLocalStorage(data);
//       this.resetOrder();
//     }


//     saveDataToLocalStorage(data: any): void {
//       const savedData = localStorage.getItem('foodOrderData');
//       let orders = [];


//       if (savedData) {
//         orders = JSON.parse(savedData);
//       }


//       orders.push(data);
//       localStorage.setItem('foodOrderData', JSON.stringify(orders));
//     }


//     resetOrder(): void {
//       this.selectedItems = [];
//       this.totalCost = 0;
//       this.userId ='';
//   }
//   }





