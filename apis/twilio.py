from twilio.rest import Client 
 
account_sid = '' 
auth_token = '' 
client = Client(account_sid, auth_token) 
 
message = client.messages.create( 
                              from_='+1252120249',  
                              body='Hola',      
                              to='+1408390032' 
                          ) 
 
print(message.sid)

## Response 

{
    "sid": "",
    "date_created": "Tue, 22 Dec 2020 00:17:58 +0000",
    "date_updated": "Tue, 22 Dec 2020 00:17:58 +0000",
    "date_sent": null,
    "account_sid": "",
    "to": "+14083555030",
    "from": "+12517665307",
    "messaging_service_sid": null,
    "body": "Sent from your Twilio trial account - Hola",
    "status": "queued",
    "num_segments": "1",
    "num_media": "0",
    "direction": "outbound-api",
    "api_version": "2010-04-01",
    "price": null,
    "price_unit": "USD",
    "error_code": null,
    "error_message": null,
    "uri": "/2ris", "subresource_uris" {
        "media": "/.json    }
}