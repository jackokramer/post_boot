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

    ## serialization converting an object to a string

    ## deserialization converting a json string into an object


    ## JSON (javascript) object notation is a format used to represent and store data.
    ## commonly used to transfer data on the web and to store configuration settings
    ## you can convert json strings into python objects and vice versa.
    ## you can read json files and create python objects from their key value pairs.
    ## You can write to JSON files  to store the content of python objects in json format.

