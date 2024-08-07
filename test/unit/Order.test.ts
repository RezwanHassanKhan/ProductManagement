
import { Order } from "../../src/models/Order"
import { Product } from "../../src/models/Product"


describe('Order Test Suite',()=>{
    let order : Order
    let product1 : Product 
    let product2  : Product 
    beforeEach(()=>{
        order = new Order('o1','c1')
        product1 = new Product('p1','apple watch 6',100,10)
        product2 = new Product('p2','apple watch 7',200,5)
    
    })
    it('should correctly instantiate a order with given attributes ',()=>{
        expect(order.getOrderId()).toBe('o1')
        expect(order.getCustomerId()).toBe('c1')
    })
    it('order should mark as paid correctly',()=>{

        order.markAsPaid()
        expect(order.getIsPaid()).toBe(true)
    })

    it('should not add item if stoc less than ordered amount',()=>{
        //arrange
        const actual_error = 
        //act
        expect(()=>order.addItem(product1,50)).toThrow('Insufficient stock')
        //assert
        })
    it('should add item succesffuly',()=>{
        //action
        order.addItem(product1,6)
        const actual_items = order.getItems()
     
        //assert
        expect(actual_items[0].product).toBe(product1)
        expect(actual_items[0].quantity).toBe(6)
        expect(actual_items.length).toBe(1)
        expect(product1.getStock()).toBe(4);
    })

    it('should calcuate total cost',()=>{
        //arrange
        order.addItem(product1, 2);
        order.addItem(product2, 1);

        //action
        const actual_total_cost = order.calculateTotal()

        //assert
        expect(actual_total_cost).toBe(400)
    })





})