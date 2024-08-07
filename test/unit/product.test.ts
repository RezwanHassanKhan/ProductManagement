
import { Product } from "../../src/models/Product"

describe('Product Test Suit',()=>{
    let product : Product
    beforeEach(()=>{
        product = new Product('1',"apple watch 6",650,10)
    })
    
    it("should correctly instantiate a product with given attributes",()=>{
        expect(product.getId()).toBe('1')
        expect(product.getName()).toBe("apple watch 6")
        expect(product.getPrice()).toBe(650)
        expect(product.getStock()).toBe(10)

    })
        
    it("should correctly update stock",()=>{
        //arrange
        product.updateStock(5)
        expect(product.getStock()).toBe(15)

        product.updateStock(-5)
        expect(product.getStock()).toBe(10)

        product.updateStock(-10)
        expect(product.getStock()).toBe(0)
        
    })

    it('should throw an error when trying to subtract more stock than available', () => {
        // Assert: Check if the correct error is thrown
        expect(() => {
          product.updateStock(-11);
        }).toThrow('Insufficient stock');
      });
    
    
})