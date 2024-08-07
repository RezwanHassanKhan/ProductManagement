import { Order } from "../models/Order"
import { ProductService} from "./ProductService";
import { PaymentGateway } from "./PaymentGateway"
import { Logger } from '../utils/Logger';
import { ILogger } from '../interfaces/ILogger';


export class OrderService{
    private orders : Map<string,Order>
    private productService : ProductService
    private  paymentGateway : PaymentGateway
    private logger : ILogger 

    constructor(productService: ProductService, 
        paymentGateway: PaymentGateway, 
        logger: ILogger = new Logger() ){
             this.productService = productService
             this.paymentGateway = paymentGateway
             this.logger = logger 
             this.orders = new Map<string, Order>()
        }


    public creatOrder(orderId : string, customerId: string):Order{
        const order = new Order(orderId,customerId)
        this.orders.set(orderId, order)
        this.logger.log(`Order created with ID: ${orderId}`)
        return order


    }

    public addItemToOrder(orderId : string, productId: string,quantity : number):void{
    const order =  this.findOrderById(orderId)
    if(!order){
        throw new Error("Order Not Found")
        }

        const product = this.productService.findProductById(productId)
        if(!product){
        throw new Error("Product Not Found")
        }
        order.addItem(product,quantity)
        this.logger.log(`Added item to order: ${productId}, quantity: ${quantity}`)

    }
    
    public payForOrder(orderId:string,paymentDetails : any){
        const order = this.findOrderById(orderId)
        if(!order){
            throw new Error("Order Not Found")
        }

        const totalAmount = order.calculateTotal()
        const paymentSuccesfull = this.paymentGateway.processPayment(paymentDetails,totalAmount)

        if (paymentSuccesfull){
            order.markAsPaid()
            this.logger.log(`Order ${orderId} paid successfully`)
        }
        else{
            throw new Error("Payment failed")
        }

    }

    private findOrderById(orderId :string ):Order| undefined{
        return this.orders.get(orderId)

    }

}