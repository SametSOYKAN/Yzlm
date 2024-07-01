import { Injectable } from "@angular/core";
import { CartItem } from "../models/cart-item.mode";
import { JsonPipe } from "@angular/common";

@Injectable({ providedIn: 'root' })
export class CartService {

    add(cartItem: CartItem) {
        // Eklemek için
        let cartItems = this.get();
        let addedCartItem = cartItems.find(t => t.arac.id == cartItem.arac.id);
        if (addedCartItem)
            addedCartItem.quantity += cartItem.quantity;
        else
            cartItems.push(cartItem);
        // bu işlemleri bellekte yaptık. Localstorage'a yazmamız gerekiyor.
        localStorage.setItem("cart", JSON.stringify(cartItem));

    }

    remove(aracId: number) {
        //
        let cartItem = this.get();
        let indexNo = cartItem.findIndex(t => t.arac.id == aracId);
        if (indexNo == -1)
            return;
        // kaçıncı indeksten başlayacak kaç tane silecek. splice metodu.
        //  let index= cartItem.findIndex(t => t.arac.id == aracId)
        cartItem.splice(indexNo, 1)
        localStorage.setItem("cart", JSON.stringify(cartItem));

    }

    clear() {
        //  Sepetteki tüm ürünleri silsin. Bu yüzden parametresiz olacak.
        localStorage.removeItem("cart");
    }

    get(): CartItem[] {
        // Sepetteki ürünleri listelemek için get metodunu oluşturdum. 
        //  Ürünleri localStorage'a kaydedeceğiz. Ordan getiriyoruz.
        let jsonCartItem = localStorage.getItem("cart");
        if (jsonCartItem)
            return JSON.parse(jsonCartItem);
        return []; //burada neden hata verdi ???????
    }


    public get totalQuantity(): number {
        let cartItem = this.get();

        return cartItem.reduce((p, c) => p + c.quantity, 0)
    }

    public get totalPrice(): number {
        let cartItem = this.get();

        return cartItem.reduce((p, c) => p + (c.quantity * c.arac.gunlukKiralamaUcreti!), 0)
    }


}