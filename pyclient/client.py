from btcpay import BTCPayClient
from os import environ

pem = open('btcpayserver.pem', 'r')
privkey = pem.read()
host_store = "http://raspberrypi.local"
tok = open('merchant_token', 'r')
token = tok.read()

client = BTCPayClient(
    host = host_store,
    pem = privkey,
    tokens = {'merchant': token}
)
new_invoice = client.create_invoice({"price": 20, "currency": "USD"})
print(new_invoice)