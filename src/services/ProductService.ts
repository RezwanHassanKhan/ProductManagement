import { Product } from "../models/Product"
export class ProductService{
    private products : Map<string, Product>

    constructor(){
        this.products = new Map<string, Product>()
    }

    public addProduct(product:Product){
        if (!this.products.has(product.getId())){
            throw new Error('Product already exists');
        }
        this.products.set(product.getId(),product)

        }

        
    
    public findProductById(productId: string): Product| undefined{
        return this.products.get(productId)
    }

    public updateProductStock(productId: string, amount: number){
        const prod = this.findProductById(productId)

        if(!prod){
            throw new Error('Product not found');
        }
        prod.updateStock(amount)

    }

    public listProducts() : Product[]{
        return Array.from(this.products.values())
    }

}
