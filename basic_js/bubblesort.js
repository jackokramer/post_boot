function bubblesort(arr){
    for(var x = 0; x < arr.length -1; x++){
        for(var t = 0; t < arr.length -1-x; t++){
            if(arr[t]>arr[t+1]){
                swapp(arr, t, t+1);
            }
        }
    }
    return arr;
}

function swapp(arr, ind1, ind2){
    var temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
}