import { CartService } from "./../cart.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"],
})
export class ShippingComponent {
  constructor(private cartService: CartService) {}
  shippingCosts = this.cartService.getShippingPrices();
}
