document.getElementById("paymentForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
 
    // Call Paytm JS Checkout to open the payment window
    initiatePaytmPayment();
 });
 
 function initiatePaytmPayment() {
    var options = {
       /* Configure Paytm parameters here */
    };
 
    // Call the Paytm JS Checkout method
    Paytm.CheckoutJS(initiatePayment, failureCallback);
 
    function initiatePayment() {
       Paytm.Checkout.open(options);
    }
 
    function failureCallback(error) {
       console.error("Paytm payment initiation failed:", error);
    }
 }
 