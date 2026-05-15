# Mollie Integratie

Nog niet actief gebouwd. Beoogde stappen:

1. Payment create server-side.
2. Pending order koppelen aan Mollie payment id.
3. Webhook signature/secret controleren.
4. Paymentstatus vertalen naar orderstatus.
5. Refund flow toevoegen.

## Randvoorwaarden

- Geen Mollie secrets naar client sturen.
- Webhook idempotent maken.
- Orderbedragen altijd server-side herberekenen.
