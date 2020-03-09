from btcpay import BTCPayClient, crypto

host_url = "http://raspberrypi.local"
privkey = crypto.generate_privkey()
with open('btcpayserver.pem', 'w') as pem:
    pem.write(privkey)
pairing_code = "cPbc35p"

client = BTCPayClient(host=host_url, pem=privkey)
token = client.pair_client(pairing_code)
merchant_token = token['merchant']
with open('merchant_token', 'w') as tok:
	tok.write(merchant_token)