import json #from products.json

data_JSON = ""
{
    "size": "large",
    "price": 21.22,
    "toppings": ["pineapple", "Peperoni", "bell peppers", "ham"],
    "client":{ 
     "name": "andy Irons",
    "phone": "808-212-3332",
    "email": 'andyirons@gmail.com'
    }
}
""

data_dict = json.loads(data_JSON)

print(data_dict)

{
    "orders":[
    {
        "size":"medium",
        "price": 17.90,
        "toppings": [
            "mushrooms",
            "pepercini",
            "basil"
        ],
        "extra cheese": false,
        "delivery": true
    },
    {
        "size": "small",
        "price": 6.49,
        "toppings": null,
        "extra_cheese": true,
        "delivery": false,
    }
    ]
    }