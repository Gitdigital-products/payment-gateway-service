export function registerRoutes(app) {
  app.get("/health", (req, res) => {
    res.json({ status: "ok", service: "payment-gateway-service" });
  });

  // Payment-specific endpoints
  app.post("/payment/process", (req, res) => {
    const { orderId, amount, method } = req.body;
    res.json({ message: `Payment of ${amount} for order ${orderId} processed via ${method}`, status: "Success" });
  });

  app.get("/payment/:orderId", (req, res) => {
    const { orderId } = req.params;
    res.json({ orderId, status: "Success", transactionId: `txn-${Date.now()}` });
  });

  app.post("/payment/refund", (req, res) => {
    const { orderId, amount } = req.body;
    res.json({ message: `Refund of ${amount} for order ${orderId} initiated`, status: "Pending" });
  });
}
