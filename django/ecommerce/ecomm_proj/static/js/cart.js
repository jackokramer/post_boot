let updateBtns = document.getElementsByClassName('update-cart')

for(let x = 0; x<updateBtns.length; x++){
    updateBtns[x].addEventListener('click', function(){
        let productId = this.dataset.product // item clicked on similar to self
        let action = this.dataset.action
        console.log('productId: ', productId, 'Action: ', action)

    console.log('User', user)
    if(user === "AnonymousUser"){
        addCookieItems(productId, action)
    } else{
        updateUserOrder(productId, action)
    }
    })
}

function addCookieItems(productId, action){
    console.log('User is not logged in')

    if (action == 'add'){
        if(cart[productId] == undefined){
            cart[productId] = {'quantity': 1}
        } else{
            cart[productId]['quantity'] +=1
        }
    }
    if(action == 'remove'){
        cart[productId]['quantity'] -=1

        if(cart[productId]['quantity']<=0){
            console.log(`Item should be deleted`)
            delete cart[productId];
        }
    }
    console.log('Cart:', cart)
    document.cookie = 'cart='+ JSON.stringify(cart) + ";domain=;path=/"
    location.reload()
}  

function updateUserOrder(productId, action){ // starts at 16:06
    console.log('User is authenticated, sending data..')
    let url = '/update_item/'

    fetch(url, { //what kind of data we're sending to the back end
        method: 'POST',
        headers :{
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        }, 
        body:JSON.stringify({'productId': productId, 'action': action})
    })
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log('data', data)
        location.reload()
    })
}

