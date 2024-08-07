export class Product {
    private id: string;
    private name: string;
    private price: number;
    private stock: number;

    constructor(id: string, name: string, price: number, stock: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    /**
     * Get the unique identifier for the product.
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Get the name of the product.
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Get the price of the product.
     */
    public getPrice(): number {
        return this.price;
    }

    /**
     * Get the current stock level of the product.
     */
    public getStock(): number {
        return this.stock;
    }

    /**
     * Update the stock level of the product.
     * @param amount - The amount to adjust the stock by (positive or negative).
     */
    public updateStock(amount: number): void {
        if(amount + this.stock < 0){
            throw new Error('Insufficient stock')
        }
        this.stock += amount;
    }
}