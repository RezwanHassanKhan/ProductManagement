export class PaymentGateway {
    /**
     * Processes the payment for a given amount.
     * @param paymentDetails - The payment details provided by the customer.
     * @param amount - The total amount to be charged.
     * @returns True if the payment is successful, otherwise false.
     */
    public processPayment(paymentDetails: any, amount: number): boolean {
        // Simulate payment processing logic
        console.log(`Processing payment for amount: $${amount}`);
        
        // Assume payment is always successful for this simulation
        return paymentDetails.cardNumber !== '0000-0000-0000-0000';
    }
}