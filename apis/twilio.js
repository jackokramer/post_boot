const accountSid = ''; 
const authToken = ''; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'Hola', 
         from: '+12517668807',       
         to: '+14083509031' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();


// Response 
let response = 
{
    "sid": "",
    "date_created": "Tue, 22 Dec 2020 00:17:58 +0000",
    "date_updated": "Tue, 22 Dec 2020 00:17:58 +0000",
    "date_sent": null,
    "account_sid": "",
    "to": "+1408098642",
    "from": "+12145678432",
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
    "uri": ".json",
    "subresource_uris": {
        "media": "/Media.json"
    }
}