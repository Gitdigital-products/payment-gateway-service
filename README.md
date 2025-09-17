# payment-gateway-service
**payment-gateway-service** handles payment processing, status checks, and refunds.  ## Endpoints - `GET /health` — service status - `POST /payment/process` — process a payment (sample) - `GET /payment/:orderId` — get payment status (sample) - `POST /payment/refund` — initiate a refund (sample)  ## Tracing This service reports telemetry 
