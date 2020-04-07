let glazedDounts = [
    {
        frosting: 'glazed',
        style: 'cake',
        type: 'old fashioned',
        age: 45,
        time: 'minutes'
    },

    {
        frosting: 'glazed',
        style: 'yeast raised',
        type: 'regular',
        age: 5,
        time: 'minutes'
    },
    {
        frosting: 'glazed',
        style: 'yeast raised',
        type: 'regular',
        age: 45,
        time: 'seconds'
    }
]

// Can I buy the 1st donut on the rack if its been out of the oven for fewr than 25 minutes? 

let purchase // my question
if((glazedDounts[0].age< 25 && glazedDounts[0].time == 'minutes') || glazedDounts[0].time == 'seconds'){
    // shope owner
    purchase = glazedDounts[0];
}
    else{
        console.log('sorry it has been out a bit longer');
    }

let numPurchase = 0;
for(let donut in glazedDounts){
    console.log(glazedDounts[donut].type);
    if((glazedDounts[donut].age < 25 && glazedDounts[donut].time == 'minutes') || glazedDounts[donut].time == 'seconds')
    {
        numPurchase++;
    }
    else{
        console.log('not this donut ...');
    }
}
console.log(numPurchase);