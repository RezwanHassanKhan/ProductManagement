import { Product } from "../models/Product"

export class InventoryService{
    private products : Map<string,number>
    constructor(){

        this.products = new Map<string, number>();
    }

    addProduct(productId : string , initialStock : number): void {
        if(this.products.has(productId)){
            throw new Error("Product already exists in inventory")
        }
        this.products.set(productId,initialStock)
        
    }

    removeProduct(productid:string):void{
        if(!this.products.has(productid)){
            throw new Error("Product not found in inventory")
            
        }
        this.products.delete(productid)

    }

    updateInventory(productId : string, quantity : number): void{
        if(!this.products.has(productId)){
            throw new Error("Product not found in inventory")
            
        }
        const currentStock = this.products.get(productId)!
        const newStock = currentStock + quantity

        if (newStock < 0) {
            throw new Error('Insufficient stock for update');
        }

        this.products.set(productId, newStock);


    }

    checkStockAvaiabilty(productId : string, requiredQuantity : number ):boolean{
        if(!this.products.has(productId)){
            throw new Error('Product not found in inventory')
        }
        const avaialableQuantity = this.products.get(productId)!
        
        return avaialableQuantity >= requiredQuantity

    }

    getStockAvaiabilty(productId : string):number{
        if (this.products.has(productId)) {
            throw new Error('Product not found in inventory');
        }
        return this.products.get(productId)!;

        }

    }

