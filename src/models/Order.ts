import { Product } from "./Product"

export class Order{
        private orderid:string 
        private customerId: string
        private items : { product: Product; quantity: number }[] = []
        private isPaid : boolean = false
        
        constructor(orderId: string, customerId: string){
            this.orderid = orderId
            this.customerId = customerId
    }



    markAsPaid(){
        this.isPaid = true
    }

  

    getOrderId():string{
        return this.orderid

    }

    getCustomerId():string{
        return this.customerId

    }

    getItems(){
        return this.items
    }

    getIsPaid(){
        return this.isPaid
    }

    calculateTotal(): number{
        let totalCost = 0;
        for( const item of this.items){
         totalCost += item.product.getPrice()* item.quantity
        }
        return totalCost
 
 
 
     }

    addItem(product: Product, quantity: number):void{
        if (product.getStock() < quantity){
            throw new Error('Insufficient stock');
        }
        this.items.push({product,quantity})
        product.updateStock(-quantity)

    }
}