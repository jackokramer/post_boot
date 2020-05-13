function recursion(doll){
    // base case
    if('weve found the choclate')
        return console.log('delicious');
    else if('tjere are no more dolls'){
        console.log('no more chocolate here')
    }
    else{
        recursion('smaller doll')
    }
    //recurisve case

}

// programing technique big problem dependent on the small problems
// runs over and over until it reaches the stopping conmdtion (base case)